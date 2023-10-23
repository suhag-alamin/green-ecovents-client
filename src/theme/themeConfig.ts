// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    // colorPrimary: "#43934A",
    // colorInfo: "#78CAD2",
    // colorLink: "#6FAE4F",
    // colorText: "#1F3C4A",
    // colorWhite: "#EDF4ED",
    colorPrimary: "#3BA27A",
    colorInfo: "#446DB7",
    colorLink: "#446DB7",
    colorText: "#1F3C4A",
    colorWhite: "#EDF4ED",
    colorError: "#F14947",
    colorSuccess: "#3BA27A",
    colorWarning: "#F9B53F",

    fontFamily: "Montserrat",
  },
  components: {
    Layout: {
      bodyBg: "#fff",
      headerBg: "#fff",
      controlPaddingHorizontal: 200,
      controlPaddingHorizontalSM: 100,
      siderBg: "#1F3C4A",
    },
    Menu: {
      darkItemBg: "#3BA27A",
      darkSubMenuItemBg: "#3BA27A",
      darkItemColor: "#EDF4ED",
      darkItemHoverBg: "rgba(0, 0, 0, 0.06)",
      darkItemSelectedBg: "#1F3C4A",
    },
    Typography: {
      titleMarginBottom: 5,
      titleMarginTop: 0,
    },
  },
};

export default theme;
