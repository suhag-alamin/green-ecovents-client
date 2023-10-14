"use client";

import { ConfigProvider } from "antd";
import StyledComponentsRegistry from "./AntdRegistry";
import theme from "@/theme/themeConfig";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider theme={theme}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ConfigProvider>
  );
};

export default Providers;
