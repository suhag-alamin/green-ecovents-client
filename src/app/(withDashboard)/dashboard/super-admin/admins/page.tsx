"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import ActionBar from "@/components/ui/ActionBar";
import DeleteModal from "@/components/ui/DeleteModal";
import GETable from "@/components/ui/GETable";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import { IDeleteInfo, IMeta, IQuery, IUser } from "@/interfaces/global";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Col, Flex, Row } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const Admins = () => {
  const [query, setQuery] = useState<IQuery>();
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [admins, setAdmins] = useState<IUser[]>();
  const [meta, setMeta] = useState<IMeta>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  // modal
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState<IDeleteInfo>();
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  useMemo(() => {
    const loadAdmin = async () => {
      setIsLoading(true);
      const res = (
        await axiosInstance.get("/admin", {
          params: query,
        })
      ).data as IApiResponse;
      setAdmins(res.data);
      setMeta(res.meta);
      setIsLoading(false);
    };
    loadAdmin();
  }, [query, isDeleted]);

  useEffect(() => {
    setQuery({
      page,
      limit: size,
      sortBy,
      sortOrder,
    });
  }, [page, size, sortBy, sortOrder]);

  const handleSearch = (data: any) => {
    console.log(data);
    if (data?.query) {
      setQuery({
        query: data?.query,
      });
      setSearchTerm(data?.query);
    }
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Contact no.",
      dataIndex: "contactNo",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <Flex gap={2}>
            <Link href={`/super_admin/manage-admin/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              //   onClick={() => handleDeleteAdmin(data)}
              onClick={() => {
                setModalOpen(true);
                setDeleteInfo({
                  api: `admin/${data}`,
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

  // delete

  return (
    <div>
      <ActionBar title="Admin List">
        <Form submitHandler={handleSearch}>
          <Row>
            <Col>
              <FormInput
                name="query"
                type="search"
                size="large"
                placeholder="John"
                // style={{
                //   width: "100%",
                // }}
                // onChange={(e) => setSearchTerm(e.target.value)}
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
        dataSource={admins}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
      <div>
        {/* <Button
          type="primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          Open Modal with async logic
        </Button> */}
        <DeleteModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          deleteInfo={deleteInfo}
          setIsDeleted={setIsDeleted}
          modalText="Are you sure want to delete? Deleting will delete related to this Admin."
        />
      </div>
    </div>
  );
};

export default Admins;
