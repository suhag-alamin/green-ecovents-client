import logo from "@/assets/logo-2.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, Col, Flex, Grid, List, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

const { useBreakpoint } = Grid;

const data = [
  { category: "Category", link: "/" },
  { category: "Category", link: "/" },
  { category: "Category", link: "/" },
  { category: "Category", link: "/" },
  { category: "Category", link: "/" },
];

const Footer = () => {
  const screen = useBreakpoint();

  // const res = await

  const handleSubscribe = async (data: any) => {
    console.log(data);
  };

  return (
    <Row
      style={{
        padding: screen.lg ? "20px 80px" : "10px 20px",
        background: "#1F3C4A",
        color: "#EDF4ED",
      }}
    >
      <Col xs={2} sm={4} md={6} lg={8}>
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
      <Col xs={20} sm={16} md={12} lg={8}>
        <div>
          <h3>Top Categories</h3>
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Link
                  style={{
                    color: "#EDF4ED",
                  }}
                  href={item.link}
                >
                  {item.category}
                </Link>
              </List.Item>
            )}
          />
        </div>
      </Col>
      <Col xs={2} sm={4} md={6} lg={8}>
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
  );
};

export default Footer;
