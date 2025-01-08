import { ThemeProvider } from './modules/theme/ThemeProvider';
import { observer } from 'mobx-react';
import ThemeSwitcher from './modules/theme/components/ThemeSwitcher';
import SquareBlock from './modules/app/components/SquareBlock';
import Main from './modules/app/components/Main';

const App = observer(() => {

  return (
    <ThemeProvider>
      <Main>
        <ThemeSwitcher />
        <SquareBlock />
      </Main>
    </ThemeProvider>
  );
})

export default App;