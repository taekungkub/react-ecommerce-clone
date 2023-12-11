import { useMantineTheme } from "@mantine/core";
import { useState } from "react";

function useBackgroundApp() {
  const theme = useMantineTheme();
  const [currentBg, setCurrentBg] = useState(theme.colors.red[0]);

  return {
    theme,
    currentBg,
    setCurrentBg,
  };
}

export default useBackgroundApp;
