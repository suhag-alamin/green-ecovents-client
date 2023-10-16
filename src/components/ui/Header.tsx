import { authKey } from "@/constants/storageKey";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();

  const { role } = getUserInfo() as any;

  const logout = () => {
    removeUserInfo(authKey);
    router.push("/signin");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logout} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  return (
    <AntHeader
      style={{
        background: "#f7f7f7",
      }}
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <Dropdown menu={{ items }}>
          <div
            style={{
              cursor: "pointer",
            }}
          >
            <Space wrap size={16}>
              <h4>{role}</h4>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </div>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
