import logo from "@/assets/logo.png";
import {
  HomeOutlined,
  MailOutlined,
  MenuOutlined,
  ScheduleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Col, Drawer, Layout, Menu, MenuProps, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const { Header } = Layout;

const menuItems: MenuProps["items"] = [
  {
    label: <Link href="/">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link href="/">Events</Link>,
    key: "events",
    icon: <ScheduleOutlined />,
  },
  {
    label: <Link href="/">Cart</Link>,
    key: "cart",
    icon: <ShoppingCartOutlined />,
  },
  {
    label: <Link href="/">Contact Us</Link>,
    key: "contact-us",
    icon: <MailOutlined />,
  },
  {
    label: (
      <>
        <Button type="primary" style={{ marginRight: "10px" }}>
          Sign in
        </Button>
        <Button>Sign up</Button>
      </>
    ),
    key: "login-signup",
  },
];

const Navbar = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Header style={{ padding: 0 }}>
        <Row justify="space-between" align="middle">
          <Col xs={20} sm={20} md={4}>
            <div style={{ color: "white", paddingLeft: "20px" }}>
              <Image width={120} height={60} src={logo} alt="logo" />
            </div>
          </Col>
          <Col xs={0} sm={0} md={20}>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={menuItems}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                border: "none",
              }}
            ></Menu>
          </Col>
          <Col xs={2} sm={2} md={0}>
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </Col>
        </Row>
        <Drawer
          placement="left"
          onClick={onClose}
          onClose={onClose}
          open={visible}
        >
          <Menu
            mode="vertical"
            defaultSelectedKeys={["1"]}
            items={menuItems}
          ></Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
