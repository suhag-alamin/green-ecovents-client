"use client";

import { IBlog } from "@/interfaces/global";
import { Grid, Typography } from "antd";
import React from "react";

const { useBreakpoint } = Grid;

interface EventDetailsProps {
  blog: IBlog;
}

const BlogContentDetails = ({ blog }: EventDetailsProps) => {
  const screen = useBreakpoint();

  const renderHTML = (rawHTML: any) =>
    React.createElement("div", {
      dangerouslySetInnerHTML: { __html: rawHTML },
      style: {
        whiteSpace: "pre-line",
      },
      className: "blog-content",
    });
  return (
    <div
      style={{
        margin: "20px 0",
      }}
    >
      <Typography.Title
        style={{
          fontSize: screen.lg ? 28 : 22,
          fontWeight: "700",
          textAlign: "center",
          marginBottom: 20,
        }}
        level={2}
        type="success"
      >
        {blog?.title}
      </Typography.Title>
      <div>{renderHTML(blog.content)}</div>
      <Typography.Title
        style={{
          margin: "20px 0",
        }}
        level={4}
        type="secondary"
      >
        Author: {blog?.user?.firstName} {blog?.user?.lastName || ""}
      </Typography.Title>
    </div>
  );
};

export default BlogContentDetails;
