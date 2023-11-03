import { IPage } from "@/interfaces/global";
import React from "react";

interface PageDetailsProps {
  content: IPage;
}

const PageDetails = ({ content }: PageDetailsProps) => {
  console.log(content);
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
      <div>{renderHTML(content)}</div>
    </div>
  );
};

export default PageDetails;
