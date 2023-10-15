"use client";
import { Grid, Layout } from "antd";
import Footer from "./Footer";
import Navbar from "./Navbar";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const screen = useBreakpoint();

  return (
    <Content>
      <Navbar />
      <div
        style={{
          padding: screen.lg ? "0 80px" : "0 20px",
          color: "#1F3C4A",
        }}
      >
        {children}
      </div>
      <Footer />
    </Content>
  );
};

export default Contents;
