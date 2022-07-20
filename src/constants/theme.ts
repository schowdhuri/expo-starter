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
    Epilogue: {
      100: {
        normal: "Epilogue_100Thin",
        italic: "Epilogue_100Thin_Italic",
      },
      300: {
        normal: "Epilogue_300Light",
        italic: "Epilogue_300Light_Italic",
      },
      400: {
        normal: "Epilogue_400Regular",
        italic: "Epilogue_400Regular_Italic",
      },
      500: {
        normal: "Epilogue_500Medium",
        italic: "Epilogue_500Medium_Italic,",
      },
      700: {
        normal: "Epilogue_700Bold",
        italic: "Epilogue_700Bold_Italic",
      },
      800: {
        normal: "Epilogue_800ExtraBold",
        italic: "Epilogue_800ExtraBold_Italic",
      },
      900: {
        normal: "Epilogue_900Black",
        italic: "Epilogue_900Black_Italic",
      },
    },
  },
  fonts: {
    heading: "Epilogue",
    body: "Epilogue",
    mono: "Epilogue",
  },
});

export { theme };
