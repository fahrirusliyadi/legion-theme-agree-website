import { ThemeTokens } from '../tokens';
import { badges } from './badges';
import { buttons } from './buttons';
import { cards } from './cards';
import { colorscard } from './colorscard';
import { colors } from './colors';
import { forms } from './forms';
import { layout } from './layout';
import { spacers } from './spacers';
import { spinner } from './spinner';
import { styles } from './styles';
import { table } from './table';
import { tableRow } from './tableRow';
import { headCell } from './headCell';
import { tableCell } from './tableCell';
import { text } from './text';
import { tooltip } from './tooltip';

export const makeThemeStyles = (tokens: ThemeTokens) => {
  return {
    badges: badges(tokens),
    buttons: buttons(tokens),
    cards: cards(tokens),
    colorscard: colorscard(tokens),
    colors: colors(tokens),
    forms: forms(tokens),
    layout: layout(),
    spacers: spacers(),
    spinner: spinner(tokens),
    styles: styles(tokens),
    table: table(),
    tableRow: tableRow(tokens),
    headCell: headCell(tokens),
    tableCell: tableCell(tokens),
    text: text(tokens),
    tooltip: tooltip(tokens),
  };
};
