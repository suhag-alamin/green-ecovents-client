import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import { IBlog } from "@/interfaces/global";
import { Button, Col, Flex, Row } from "antd";
import Link from "next/link";
import BlogCard from "../Card/BlogCard";

const Blogs = async () => {
  const query = {
    page: 1,
    size: 6,
  };

  const result = (
    await axiosInstance.get("/blogs", {
      params: query,
    })
  ).data as IApiResponse;
  const blogs = result?.data;

  return (
    <div className="container">
      <div
        style={{
          marginBottom: 30,
        }}
      >
        <h3 className="section-title">Blog Posts</h3>
      </div>
      <Row gutter={16}>
        {blogs?.map((blog: IBlog) => (
          <Col key={blog.id} xs={24} sm={12} lg={8}>
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
      <Flex
        style={{
          margin: "30px 0",
        }}
        justify="center"
      >
        <Link href="/blogs">
          <Button type="primary">View All</Button>
        </Link>
      </Flex>
    </div>
  );
};

export default Blogs;
