"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import EventCard from "@/components/ui/Card/EventCard";
import GEPagination from "@/components/ui/Pagination";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import { IEvent, IMeta, IQuery } from "@/interfaces/global";
import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, PaginationProps, Row, Spin, Typography } from "antd";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const EventsPage = () => {
  const searchParam = useSearchParams();
  const searchQuery = searchParam.get("query");

  const [query, setQuery] = useState<IQuery>();
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(9);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [events, setEvents] = useState<IEvent[]>();
  const [meta, setMeta] = useState<IMeta>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useMemo(() => {
    const loadEvents = async () => {
      setIsLoading(true);
      const res = (
        await axiosInstance.get("/events", {
          params: query,
        })
      )?.data as IApiResponse;
      setEvents(res?.data);
      setMeta(res.meta);
      setIsLoading(false);
    };
    loadEvents();
  }, [query]);

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

  const resetFilters = () => {
    setQuery({});
  };

  const onChange: PaginationProps["onChange"] = (
    page: number,
    pageSize: number
  ) => {
    setPage(page);
    setSize(pageSize);
  };

  if (isLoading || events?.length === 0) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="container">
      <div
        style={{
          marginBottom: 30,
        }}
      >
        <Form submitHandler={handleSearch}>
          <Row justify="start" align="middle" gutter={20}>
            <Col xs={20}>
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
            <Col xs={4}>
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
            </Col>
          </Row>
        </Form>
      </div>
      <Row gutter={[16, 16]}>
        {events?.map((event) => (
          <Col key={event.id} xs={24} sm={12} lg={8}>
            <EventCard event={event} loading={isLoading} />
          </Col>
        ))}
        {events?.length === 0 && (
          <Col xs={24}>
            <Typography.Title
              style={{
                textAlign: "center",
              }}
              level={4}
              type="danger"
            >
              No Events found! Try again later
            </Typography.Title>
          </Col>
        )}
      </Row>

      {events && events?.length > 0 && (
        <div>
          <GEPagination
            onChange={onChange}
            meta={meta}
            page={page}
            size={size}
            pageSizeOptions={[10, 20, 30]}
          />
        </div>
      )}
    </div>
  );
};

export default EventsPage;
