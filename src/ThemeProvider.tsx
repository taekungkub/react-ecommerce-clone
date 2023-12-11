import {
  ButtonStylesParams,
  CardProps,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  SkeletonProps,
  Paper,
  useMantineTheme,
  PaperProps,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

interface Props {
  children: React.ReactNode;
}

function ThemeProvider({ children }: Props) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const dark = colorScheme === "dark";
  const theme = useMantineTheme();

  return (
    <>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            primaryColor: dark ? "yellow" : "",
            loader: "bars",
            colorScheme,
            fontFamily: "Noto Sans Thai",
            components: {
              Container: {
                defaultProps: {
                  sizes: {
                    xs: 540,
                    sm: 720,
                    md: 1200,
                    lg: 1200,
                    xl: 1200,
                  },
                },
              },

              Button: {
                styles: (theme, params: CardProps, { variant }) => ({
                  root: {
                    borderRadius: theme.radius.md,
                  },
                }),
              },
              Card: {
                styles: (theme, params: CardProps, { variant }) => ({
                  root: {
                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
                  },
                }),
              },
              Menu: {
                styles: (theme) => ({
                  dropdown: {
                    boxShadow: theme.shadows.lg,
                    borderRadius: theme.radius.md,
                  },
                }),
              },
              Paper: {
                styles: (theme, params: PaperProps, { variant }) => ({
                  root: {
                    borderRadius: theme.radius.md,
                  },
                }),
              },
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Notifications position="top-center" />

          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default ThemeProvider;
