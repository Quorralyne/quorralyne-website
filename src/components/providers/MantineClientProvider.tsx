"use client";

import { MantineProvider, createTheme } from "@mantine/core";
import { ColorSchemeScript } from "@mantine/core";

const theme = createTheme({
  primaryColor: "green",
  colors: {
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5C5F66",
      "#373A40",
      "#2C2E33",
      "#383838", // content background
      "#333333", // main background
      "#404040", // card background
      "#1A1B1E",
    ],
  },
  components: {
    Paper: {
      defaultProps: {
        className: "content-paper",
      },
    },
  },
});

export function MantineClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider theme={theme} defaultColorScheme="auto">
        {children}
      </MantineProvider>
    </>
  );
}
