"use client";
import { Layout } from "antd";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BackToTop from "./BackToTop";
import ShowCookieMessage from "./ShowCookieMessage";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content>
      <BackToTop />
      <Navbar />
      <div
        style={{
          color: "#1F3C4A",
        }}
      >
        {children}
      </div>
      <Footer />
      <ShowCookieMessage />
    </Content>
  );
};

export default Contents;
