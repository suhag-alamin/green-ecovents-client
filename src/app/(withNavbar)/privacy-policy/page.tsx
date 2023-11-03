import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import { IPage } from "@/interfaces/global";
import { Empty, Spin } from "antd";

import GEBreadCrumb from "@/components/ui/GEBreadCrumb";
import PageDetails from "@/components/ui/PageDetails";

const PrivacyPolicy = async () => {
  const result = (
    await axiosInstance.get(`/pages/6aa35790-db28-4f5a-8dfa-83c6c0907059`)
  )?.data as IApiResponse;
  const page: IPage = result?.data;

  if (!page) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Spin size="large" />
        </div>
        <div
          style={{
            display: "block",
            marginTop: 20,
          }}
        >
          <Empty />
        </div>
      </div>
    );
  }

  return (
    <div>
      <GEBreadCrumb
        title="Privacy Policy"
        items={[
          {
            label: "Privacy Policy",
          },
        ]}
      />
      <div className="container">
        <PageDetails content={page.content} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
