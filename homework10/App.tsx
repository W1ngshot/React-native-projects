import { ThemeProvider } from "./src/modules/theme/ThemeProvider";
import { observer } from "mobx-react";
import ThemeSwitcher from "./src/modules/theme/components/ThemeSwitcher";
import SquareBlock from "./src/modules/app/components/SquareBlock";
import Main from "./src/modules/app/components/Main";
import { useLoadFonts } from "./src/modules/fonts/hooks/useLoadFonts";

const App = observer(() => {
  const { loaded, error } = useLoadFonts();

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <Main>
        <ThemeSwitcher />
        <SquareBlock />
      </Main>
    </ThemeProvider>
  );
});

export default App;