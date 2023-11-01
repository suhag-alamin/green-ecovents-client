import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import { Col, Empty } from "antd";
import GEAccordion from "../GEAccordion";
import { IFaq } from "@/interfaces/global";

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

// const items: CollapseProps['items'] = [
//   {
//     key: '1',
//     label: 'This is panel header 1',
//     children: <p>{text}</p>,
//   },
//   {
//     key: '2',
//     label: 'This is panel header 2',
//     children: <p>{text}</p>,
//   },
//   {
//     key: '3',
//     label: 'This is panel header 3',
//     children: <p>{text}</p>,
//   },
// ];

const FAQs = async () => {
  const result = (await axiosInstance.get("/faq"))?.data as IApiResponse;
  const faqs = result?.data as IFaq[];

  const items = faqs?.map((faq: IFaq) => ({
    key: faq.id,
    label: faq.question,
    children: <p>{faq.answer}</p>,
  }));

  return (
    <div className="container">
      <h3 className="section-title">Frequently Asked Questions</h3>
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
  );
};

export default FAQs;
