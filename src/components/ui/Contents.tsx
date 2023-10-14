"use client";
import { Layout } from "antd";
import Navbar from "./Navbar";
// import Header from "./Header";
const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Navbar />

      <div
        style={{
          padding: 20,
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;
