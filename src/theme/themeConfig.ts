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
      bodyBg: "#EDF4ED",
      headerBg: "#fff",
      controlPaddingHorizontal: 200,
      controlPaddingHorizontalSM: 100,
      siderBg: "#1F3C4A",
    },
    Menu: {
      darkItemBg: "#43934A",
      darkSubMenuItemBg: "#43934A",
      darkItemColor: "#EDF4ED",
      darkItemHoverBg: "rgba(0, 0, 0, 0.06)",
      darkItemSelectedBg: "#1F3C4A",
    },
  },
};

export default theme;
