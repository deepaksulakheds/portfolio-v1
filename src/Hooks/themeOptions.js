const themeOptions = {
  light: {
    mode: "light",

    // Nav Colors
    navItemTextColor: "rgba(242, 235, 227, 1)",
    navItemBackgroundColor: "",
    selectedNavTextColor: "rgba(242, 235, 227, 1)",
    selectedNavBackgroundColor: "rgba(52, 41, 35, 1)",

    primary: "rgba(52, 41, 35, 1)",
    lightPrimary: "rgba(52, 41, 35, 0.5)",
    colorOnPrimary: "rgba(242, 235, 227, 1)",

    secondary: "rgba(52, 41, 35, 1)",
    lightSecondary: "rgba(52, 41, 35, 0.5)",
    colorOnSecondary: "rgba(52, 41, 35, 1)",

    background: "rgba(242, 235, 227, 1)",
    titleSurface: "rgba(52, 41, 35, 1)",
    surface: "rgb(207, 195, 178)",

    borderColor: "#C8C8C8",
    // Text Colors
    titleText: "rgba(35, 29, 25, 1)",
    subTitleText: "rgba(35, 29, 25, 1)",
    bodyText: "rgba(35, 29, 25, 1)",
    textDisabled: "#999999",
    helperText: "rgba(138, 130, 123, 0.8)",

    disabledBackground: "rgba(0, 0, 0, 0.2)",
    disabled: "#2e2e2e",
    errorColor: "red",
    warning: "#f57c00",
    info: "#2196F3",
    success: "#4caf50",
  },
  dark: {
    mode: "dark",

    navItemTextColor: "#fff",
    navItemBackgroundColor: "",
    selectedNavTextColor: "#7C9CFF",
    selectedNavBackgroundColor: "#7C9CFF",

    primary: "#7C9CFF",
    lightPrimary: "#7C9CFF5f",
    colorOnPrimary: "#ffffff",

    secondary: "#fff",
    lightSecondary: "rgba(255, 255, 255, 0.5)",
    colorOnSecondary: "#000",

    background: "#202227",
    titleSurface: "#42444a",
    surface: "#42444a",
    borderColor: "#30363D",

    // Text Colors
    titleText: "#7C9CFF",
    subTitleText: "#fff",
    bodyText: "#fff",
    textDisabled: "#666666",
    helperText: "rgba(255, 255, 255, 0.4)",

    disabled: "#7f808dff",
    disabledBackground: "rgba(103, 109, 118, 0.3)",
    errorColor: "red",
    warning: "#f57c00",
    info: "#2196F3",
    success: "#4caf50",

    // Trash Colors
  },
};

const keys1 = Object.keys(themeOptions.dark);
const keys2 = Object.keys(themeOptions.light);

const missingInObj1 = keys2.filter((k) => !(k in themeOptions.dark));
const missingInObj2 = keys1.filter((k) => !(k in themeOptions.light));

if (missingInObj2.length > 0) {
  throw new Error("❌ Keys missing in light theme:", missingInObj2);
}
if (missingInObj1.length > 0) {
  throw new Error("❌ Keys missing in dark theme:", missingInObj1);
}

export { themeOptions };
