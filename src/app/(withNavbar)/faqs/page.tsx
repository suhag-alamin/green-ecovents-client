import GEAccordion from "@/components/ui/GEAccordion";
import GEBreadCrumb from "@/components/ui/GEBreadCrumb";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import { IFaq } from "@/interfaces/global";
import { Empty } from "antd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - GreenEcovents",
  description: "Frequently Asked Questions",
};

const FAQs = async () => {
  const result = (await axiosInstance.get("/faq"))?.data as IApiResponse;
  const faqs = result?.data as IFaq[];

  const items = faqs?.map((faq: IFaq) => ({
    key: faq.id,
    label: faq.question,
    children: <p>{faq.answer}</p>,
  }));

  return (
    <div>
      <GEBreadCrumb
        title="Frequently Asked Questions"
        items={[
          {
            label: "FAQs",
          },
        ]}
      />
      <div className="container">
        <h3 className="section-title">FAQs</h3>
        <div
          style={{
            margin: "40px 0",
          }}
        >
          <GEAccordion items={items} />
          {!faqs?.length && (
            <div
              style={{
                textAlign: "center",
                padding: "40px 0",
              }}
            >
              <Empty
                description={
                  <h3
                    style={{
                      color: "#F14947",
                      fontSize: 24,
                    }}
                  >
                    No FAQs Found
                  </h3>
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
