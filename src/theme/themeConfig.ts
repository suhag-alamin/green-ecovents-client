// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#43934A",
    colorInfo: "#78CAD2",
    colorLink: "#6FAE4F",
    colorText: "#1F3C4A",
    colorWhite: "#EDF4ED",
    fontFamily: "Montserrat",
  },
  components: {
    Layout: {
      bodyBg: "#fff",
      headerBg: "#fff",
      controlPaddingHorizontal: 200,
      controlPaddingHorizontalSM: 100,
    },
  },
};

export default theme;
