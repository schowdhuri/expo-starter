import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#f7f3ed",
      100: "#e8dcca",
      200: "#d9c5a6",
      300: "#c9ad82",
      400: "#ba965f",
      500: "#b69056", // main
      600: "#a07c45",
      700: "#7d6136",
      800: "#594526",
      900: "#352917",
    },
    secondary: {
      50: "#ebf9f3",
      100: "#9be3c4",
      200: "#32b47b",
      300: "#27AE60",
      400: "#0D7648",
      500: "#154C34", // main
      600: "#113c29",
      700: "#0e3222",
      800: "#0c2b1d",
      900: "#040e0a",
    },
    config: {
      initialColorMode: "light",
    },
  },
  fontConfig: {
    AlegreyaSansSC: {
      100: {
        normal: "AlegreyaSansSC_100Thin",
        italic: "AlegreyaSansSC_100Thin_Italic",
      },
      300: {
        normal: "AlegreyaSansSC_300Light",
        italic: "AlegreyaSansSC_300Light_Italic",
      },
      400: {
        normal: "AlegreyaSansSC_400Regular",
        italic: "AlegreyaSansSC_400Regular_Italic",
      },
      500: {
        normal: "AlegreyaSansSC_500Medium",
        italic: "AlegreyaSansSC_500Medium_Italic,",
      },
      700: {
        normal: "AlegreyaSansSC_700Bold",
        italic: "AlegreyaSansSC_700Bold_Italic",
      },
      800: {
        normal: "AlegreyaSansSC_800ExtraBold",
        italic: "AlegreyaSansSC_800ExtraBold_Italic",
      },
      900: {
        normal: "AlegreyaSansSC_900Black",
        italic: "AlegreyaSansSC_900Black_Italic",
      },
    },
    Roboto: {
      100: {
        normal: "Roboto_100Thin",
        italic: "Roboto_100Thin_Italic",
      },

      300: {
        normal: "Roboto_300Light",
        italic: "Roboto_300Light_Italic",
      },
      400: {
        normal: "Roboto_400Regular",
        italic: "Roboto_400Regular_Italic",
      },
      500: {
        normal: "Roboto_500Medium",
        italic: "Roboto_500Medium_Italic",
      },
      700: {
        normal: "Roboto_700Bold",
        italic: "Roboto_700Bold_Italic",
      },
      900: {
        normal: "Roboto_900Black",
        italic: "Roboto_900Black_Italic",
      },
    },
  },
  fonts: {
    heading: "AlegreyaSansSC",
    body: "AlegreyaSansSC",
    mono: "Roboto",
  },
});

export { theme };
