//import base from '@theme-ui/preset-base'
import { makeTheme } from '@theme-ui/css/utils';
//import { tokens as foundation } from './tokens/foundation';
import { tokens } from './tokens/agree-culture';
import { makeThemeStyles } from './styles';

export const agr = makeTheme({
  //...base,
  ...makeThemeStyles(tokens),
});

export default agr;
