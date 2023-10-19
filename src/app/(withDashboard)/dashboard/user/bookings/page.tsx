"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import ActionBar from "@/components/ui/ActionBar";
import GETable from "@/components/ui/GETable";
import UpdateModal from "@/components/ui/UpdateModal";
import { statusOptions } from "@/constants/global";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import {
  BookingStatus,
  IBooking,
  IEvent,
  IMeta,
  IQuery,
  IUpdateInfo,
} from "@/interfaces/global";
import {
  cancelBookingSchema,
  updateBookingStatusSchema,
} from "@/schemas/events";
import {
  EditOutlined,
  ReloadOutlined,
  SearchOutlined,
  CloseOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button, Col, Flex, Row } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const UserBookings = () => {
  const [query, setQuery] = useState<IQuery>();
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [bookings, setBookings] = useState<IBooking[]>();
  const [meta, setMeta] = useState<IMeta>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  // modal
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [updateInfo, setUpdateInfo] = useState<IUpdateInfo>();

  useMemo(() => {
    const loadBookings = async () => {
      setIsLoading(true);
      const res = (
        await axiosInstance.get("/bookings/user", {
          params: query,
        })
      ).data as IApiResponse;
      setBookings(res.data);
      setMeta(res.meta);
      setIsLoading(false);
      setIsDeleted(false);
      setIsUpdated(false);
    };
    loadBookings();
  }, [query, isDeleted, isUpdated]);

  useEffect(() => {
    setQuery({
      page,
      limit: size,
      sortBy,
      sortOrder,
    });
  }, [page, size, sortBy, sortOrder]);

  const handleSearch = (data: any) => {
    if (data?.query) {
      setQuery({
        query: data?.query,
      });
      setSearchTerm(data?.query);
    }
  };

  const updateDefaultValue = {
    status: updateInfo?.data?.status,
    startDate: updateInfo?.data?.startDate,
    endDate: updateInfo?.data?.endDate,
  };

  const columns = [
    {
      title: "Event Title",
      dataIndex: "event",
      render: function (data: IEvent) {
        return <>{data.title}</>;
      },
    },

    {
      title: "Category",
      dataIndex: "event",
      render: function (data: IEvent) {
        return <>{data.categories.name}</>;
      },
    },

    {
      title: "Start Date",
      dataIndex: "startDate",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },

    {
      title: "Status",
      dataIndex: "status",
      sorter: true,
    },
    {
      title: "Review",
      dataIndex: "event",
      render: function (data: any) {
        // const booking = data.bookings.find(
        //   (bk: IBooking) => bk.eventId === data.id
        // );
        // console.log(booking);
        return (
          <Link href={`/dashboard/user/review/${data.id}`}>
            <Button
              style={{
                margin: "0px 5px",
              }}
              type="primary"
            >
              <StarOutlined />
            </Button>
          </Link>
        );
      },
    },

    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <Flex gap={2}>
            <Button
              style={{
                margin: "0px 5px",
              }}
              type="primary"
              onClick={() => {
                setUpdateModalOpen(true);
                setUpdateInfo({
                  api: `/bookings/user/${data}`,
                  id: data,
                });
              }}
            >
              <CloseOutlined />
            </Button>
          </Flex>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setQuery({});
  };

  return (
    <div>
      <ActionBar title="Bookings List">
        <Form submitHandler={handleSearch}>
          <Row>
            <Col>
              <FormInput
                name="query"
                type="search"
                size="large"
                placeholder="Eco friendly wedding"
                suffix={
                  <Button type="primary" htmlType="submit">
                    <SearchOutlined />
                  </Button>
                }
              />
            </Col>
          </Row>
        </Form>
        {(!!sortBy || !!sortOrder || !!searchTerm) && (
          <Button
            style={{ margin: "0px 5px" }}
            type="primary"
            onClick={resetFilters}
            title="Reset"
          >
            <ReloadOutlined />
          </Button>
        )}
      </ActionBar>
      <GETable
        loading={isLoading}
        columns={columns}
        dataSource={bookings}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
      <div>
        <UpdateModal
          updateModalOpen={updateModalOpen}
          setUpdateModalOpen={setUpdateModalOpen}
          updateInfo={updateInfo}
          setIsUpdated={setIsUpdated}
          modalText="Are you sure want to cancel?"
          defaultValues={updateDefaultValue}
          schema={cancelBookingSchema}
          buttonText="Cancel"
        ></UpdateModal>
      </div>
    </div>
  );
};

export default UserBookings;
