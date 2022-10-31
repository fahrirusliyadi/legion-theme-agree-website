//import base from '@theme-ui/preset-base'
import { makeTheme } from '@theme-ui/css/utils';
import { tokens as foundation } from './tokens/foundation';
import { tokens } from './tokens/agree-livestock';
import { makeThemeStyles } from './styles';

export const agl = makeTheme({
  //...base,
  ...makeThemeStyles({ ...foundation, ...tokens }),
});

export default agl;
