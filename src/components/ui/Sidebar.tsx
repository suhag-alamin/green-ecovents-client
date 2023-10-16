"use client";
import { SidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";
import { Grid, Layout, Menu } from "antd";
import { useState } from "react";

const { useBreakpoint } = Grid;

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { role } = getUserInfo() as any;

  const screen = useBreakpoint();

  return (
    <Sider
      theme="dark"
      collapsible
      breakpoint="lg"
      collapsedWidth="0"
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div>
        <h3
          style={{
            color: "white",
            fontSize: screen.lg ? 34 : 24,
            textAlign: "center",
            fontWeight: "700",
            marginBottom: "16px",
            padding: 10,
          }}
        >
          GreenEcovents
        </h3>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
