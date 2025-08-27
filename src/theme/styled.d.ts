import 'styled-components';

import { ThemeColors } from './setupTheme'
import type { Themes } from '.';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeColors<keyof typeof Themes> {}
}