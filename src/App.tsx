import { ThemeProvider } from 'styled-components'
import { setupTheme, Themes } from './theme'
import { Main } from './pages/Main'

function App() {
  return (
    <ThemeProvider theme={setupTheme(Themes, 'dark')}>
      <head>
        <title>Sybits | Bitfields Sandbox</title>
        <link href='https://pro.fontawesome.com/releases/v5.15.4/css/all.css' rel='stylesheet' />
      </head>

      <Main />
    </ThemeProvider>
  )
}

export default App
