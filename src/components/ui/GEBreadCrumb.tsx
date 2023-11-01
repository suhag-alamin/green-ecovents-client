import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";

type BreadcrumbItems = {
  items: {
    label: string;
    link?: string;
  }[];
};

const GEBreadCrumb = ({ items }: BreadcrumbItems) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href="/">
          <HomeOutlined
            style={{
              color: "#edf4ed",
            }}
          />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link
            style={{
              color: "#edf4ed",
              fontWeight: "500",
            }}
            href={item.link}
          >
            {item.label}
          </Link>
        ) : (
          <span
            style={{
              color: "#edf4ed",
              fontWeight: "500",
            }}
          >
            {item.label}
          </span>
        ),
      };
    }),
  ];
  return (
    <div className="bread-crumb">
      <Breadcrumb
        style={{
          padding: 20,
          color: "#edf4ed",
        }}
        items={breadCrumbItems}
        separator={
          <span
            style={{
              color: "#edf4ed",
            }}
          >
            /
          </span>
        }
      />
    </div>
  );
};

export default GEBreadCrumb;
