"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import ActionBar from "@/components/ui/ActionBar";
import DeleteModal from "@/components/ui/DeleteModal";
import GETable from "@/components/ui/GETable";
import UpdateModal from "@/components/ui/UpdateModal";
import { statusOptions } from "@/constants/global";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import {
  IBooking,
  IDeleteInfo,
  IEvent,
  IMeta,
  IQuery,
  IUpdateInfo,
  IUser,
} from "@/interfaces/global";
import { updateBookingStatusSchema } from "@/schemas/events";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Col, Flex, Row } from "antd";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";

const Bookings = () => {
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
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState<IDeleteInfo>();
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [updateInfo, setUpdateInfo] = useState<IUpdateInfo>();

  useMemo(() => {
    const loadBookings = async () => {
      setIsLoading(true);
      const res = (
        await axiosInstance.get("/bookings", {
          params: query,
        })
      )?.data as IApiResponse;
      setBookings(res?.data);
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
      title: "User emaill",
      dataIndex: "user",
      render: function (data: IUser) {
        return <>{data.email}</>;
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
      title: "Created At",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
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
                  api: `/bookings/${data}`,
                  id: data,
                  data: bookings?.find((event) => event.id === data),
                });
              }}
            >
              <EditOutlined />
            </Button>

            <Button
              onClick={() => {
                setDeleteModalOpen(true);
                setDeleteInfo({
                  api: `/bookings/${data}`,
                  id: data,
                });
              }}
              type="primary"
              danger
            >
              <DeleteOutlined />
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
        <DeleteModal
          deleteModalOpen={deleteModalOpen}
          setDeleteModalOpen={setDeleteModalOpen}
          deleteInfo={deleteInfo}
          setIsDeleted={setIsDeleted}
          modalText="Are you sure want to delete? Deleting will delete all related to this booking."
        />

        <UpdateModal
          updateModalOpen={updateModalOpen}
          setUpdateModalOpen={setUpdateModalOpen}
          updateInfo={updateInfo}
          setIsUpdated={setIsUpdated}
          modalText="Update Booking Status"
          defaultValues={updateDefaultValue}
          schema={updateBookingStatusSchema}
        >
          <FormSelectField
            name="status"
            options={statusOptions}
            label="Change Status"
            placeholder="Select Status"
          />
        </UpdateModal>
      </div>
    </div>
  );
};

export default Bookings;
