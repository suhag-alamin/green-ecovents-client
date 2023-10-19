import logo from "@/assets/logo-2.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IApiResponse } from "@/interfaces/apiResponse";
import { ICategory } from "@/interfaces/global";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, Col, Flex, List, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const data = [
  { category: "Category", link: "/" },
  { category: "Category", link: "/" },
  { category: "Category", link: "/" },
  { category: "Category", link: "/" },
  { category: "Category", link: "/" },
];

const Footer = () => {
  const [categories, setCategories] = useState<ICategory[]>();

  useMemo(() => {
    const loadCategories = async () => {
      const res = (
        await axiosInstance.get("/categories", {
          params: {
            limit: 5,
          },
        })
      ).data as IApiResponse;
      setCategories(res.data);
    };
    loadCategories();
  }, []);

  const handleSubscribe = async (data: any) => {
    // console.log(data);
  };

  return (
    <div
      style={{
        background: "#1F3C4A",
        color: "#EDF4ED",
      }}
    >
      <div className="container">
        <Row gutter={20}>
          <Col xs={12} md={6} lg={8}>
            <div>
              <div
                style={{
                  marginBottom: 20,
                }}
              >
                <Image src={logo} alt="logo" width={180} height={90} />
                <p>GreenEcovents - Where Sustainability Meets Celebration</p>
              </div>
              <div>
                <Flex gap="middle">
                  <Link
                    className="footerLink"
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <TwitterOutlined />
                  </Link>
                  <Link
                    className="footerLink"
                    href="https://facebook.com"
                    target="_blank"
                  >
                    <FacebookOutlined />
                  </Link>
                  <Link
                    className="footerLink"
                    href="https://linkedin.com"
                    target="_blank"
                  >
                    <LinkedinOutlined />
                  </Link>
                  <Link
                    className="footerLink"
                    href="https://instagram.com"
                    target="_blank"
                  >
                    <InstagramOutlined />
                  </Link>
                </Flex>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={8}>
            <div>
              <h3>Top Categories</h3>
              <List
                dataSource={categories}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      color: "#EDF4ED",
                    }}
                  >
                    {item.name}
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Col xs={12} md={6} lg={8}>
            <div>
              <h3
                style={{
                  marginBottom: 10,
                }}
              >
                Subscribe to our Newsletter
              </h3>
              <Form submitHandler={handleSubscribe}>
                <Row gutter={10}>
                  <Col span={18}>
                    <FormInput
                      name="email"
                      type="email"
                      size="large"
                      placeholder="Enter your email"
                      prefix={<MailOutlined />}
                      styleProp={{
                        background: "#EDF4ED",
                      }}
                    />
                  </Col>
                  <Col span={6}>
                    <Button size="large" type="primary" htmlType="submit">
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
