import { ThemeProvider } from 'styled-components'
import { setupTheme, Themes } from './theme'
import { Main } from './pages/Main'
import { FlagsProvider } from './context/FlagsContext'

function App() {
  return (
    <ThemeProvider theme={setupTheme(Themes, 'light')}>
      <FlagsProvider>
        <head>
          <title>Sybits | Bitfields Sandbox</title>
          <link href='https://pro.fontawesome.com/releases/v5.15.4/css/all.css' rel='stylesheet' />
        </head>

        <Main />
      </FlagsProvider>
    </ThemeProvider>
  )
}

export default App
