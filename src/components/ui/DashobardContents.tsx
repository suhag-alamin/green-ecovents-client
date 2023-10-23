"use client";
import { Grid, Layout } from "antd";
import Header from "./Header";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const DashboardContents = ({ children }: { children: React.ReactNode }) => {
  const screen = useBreakpoint();

  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "#1F3C4A",
      }}
    >
      <Header />

      <div
        style={{
          paddingLeft: 30,
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default DashboardContents;
