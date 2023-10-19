import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import { IBlog } from "@/interfaces/global";
import { Col, Row, Spin } from "antd";
import Image from "next/image";

import BlogContentDetails from "@/components/ui/Blog/BlogContentDetails";

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const result = (await axiosInstance.get(`/blogs/${params.id}`))
    .data as IApiResponse;
  const blog: IBlog = result?.data;

  if (!blog) {
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
      <Row gutter={20}>
        <Col xs={24} md={10}>
          <Image
            alt={blog?.title}
            src={blog?.image}
            width={600}
            height={400}
            style={{
              maxWidth: "100%",
            }}
          />
        </Col>
        <Col xs={24} md={14}>
          <BlogContentDetails blog={blog} />
        </Col>
      </Row>
    </div>
  );
};

export default BlogDetails;
