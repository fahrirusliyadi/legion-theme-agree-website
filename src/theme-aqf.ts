//import base from '@theme-ui/preset-base'
import { makeTheme } from '@theme-ui/css/utils';
import { tokens as foundation } from './tokens/foundation';
import { tokens } from './tokens/agree-fisheries';
import { makeThemeStyles } from './styles';

export const aqf = makeTheme({
  //...base,
  ...makeThemeStyles({ ...foundation, ...tokens }),
});

export default aqf;
