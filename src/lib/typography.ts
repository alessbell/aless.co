import { BORDER_COLOR } from '../components/styles';

export const fonts = {
  headerFontFamily: [
    `SFMono-Regular`,
    `Menlo`,
    `Monaco`,
    `Consolas`,
    `"Liberation Mono"`,
    `"Courier New"`,
    `monospace`,
  ],
  bodyFontFamily: [
    `system-ui`,
    `-apple-system`,
    `BlinkMacSystemFont`,
    `Segoe UI`,
    `Roboto`,
    `Ubuntu`,
    `Helvetica Neue`,
    `sans-serif`,
  ],
};

const typography = new Typography({
  baseFontSize: '19px',
  baseLineHeight: 1.55,
  headerLineHeight: 1.4,
  headerFontFamily: fonts.headerFontFamily,
  bodyFontFamily: fonts.bodyFontFamily,

  overrideStyles: () => ({
    'h1,h2': {
      color: BORDER_COLOR,
      fontSize: '1.6rem',
      position: 'relative',
      textShadow: 'var(--textShadow)',
    },
    h3: {
      // fontFamily: `${fonts.headerFontFamily.join(', ')}`,
      fontWeight: 'bold',
      marginTop: '0',
      fontSize: '1rem',
    },
    'h1,h2,h3': {
      marginBottom: '0.5rem',
    },
    'h2,h4,h5,h6': {
      marginTop: '2.5rem',
    },
    'p,ul,ol': {
      marginBottom: '1.25rem',
    },
    ul: {
      listStyleType: 'circle',
    },
    strong: {
      fontStyle: 'bold',
    },
    figure: {
      margin: 0,
    },
    figcaption: {
      fontSize: '0.75rem',
      marginTop: '0.5rem',
    },
    // a: {
    //   color: 'var(--blue)',
    //   textDecoration: '#FF7EDB underline wavy',
    //   WebkitTextDecoration: '#FF7EDB underline wavy',
    //   textUnderlinePosition: 'under',
    // },
    footer: {
      fontSize: '16px',
    },
    'pre,code': {
      fontSize: '0.9rem',
      fontFamily: `${fonts.headerFontFamily.join(', ')}`,
    },
    'th:first-child, td:first-child': {
      paddingLeft: '1rem',
    },
    'th:last-child, td:last-child': {
      paddingRight: '1rem',
    },
    '.gatsby-code-title': {
      fontSize: '0.9rem',
      fontFamily: `${fonts.headerFontFamily.join(', ')}`,
    },
  }),
});
