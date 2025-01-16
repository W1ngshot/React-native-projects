import { ThemeProvider } from "./modules/theme/ThemeProvider";
import { observer } from "mobx-react";
import ThemeSwitcher from "./modules/theme/components/ThemeSwitcher";
import SquareBlock from "./modules/app/components/SquareBlock";
import Main from "./modules/app/components/Main";
import LangSwitcher from "./modules/lang/LangSwitcher";
import i18next from "./modules/lang/LangAdapter";

const App = observer(() => {
  return (
    <ThemeProvider>
      <Main>
        <LangSwitcher />
        <ThemeSwitcher />
        <SquareBlock />
      </Main>
    </ThemeProvider>
  );
});

export default App;
