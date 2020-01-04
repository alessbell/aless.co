import Typography from 'typography';
import { BORDER_COLOR } from '../components/styles';
import '../css/font-face.css';

export const fonts = {
  GTPressuraRegular: 'GT Pressura Mono Regular',
  GTPressuraBold: 'GT Pressura Mono Bold',
  UntitledRegular: 'Untitled Sans',
};

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.55,
  headerLineHeight: 1.4,
  headerFontFamily: [fonts.GTPressuraBold, 'monospace'],
  bodyFontFamily: [fonts.UntitledRegular, 'sans-serif'],

  overrideStyles: () => ({
    'h1,h2': {
      color: BORDER_COLOR,
      fontSize: '1.75rem',
      position: 'relative',
      textShadow: 'var(--textShadow)',
    },
    h3: {
      marginTop: '0',
      fontSize: '1.15rem',
    },
    'div,h3,h4,h5,h6,small,figcaption,strong,p,ul,ol': {
      color: 'var(--textNormal)',
    },
    'h1,h2,h3': {
      marginBottom: '0.2rem',
    },
    'h2,h4,h5,h6': {
      marginTop: '2.5rem',
    },
    'p,ul,ol': {
      marginBottom: '1.5rem',
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
    a: {
      color: 'var(--blue)',
      textDecoration: 'hotpink underline wavy',
      WebkitTextDecoration: 'hotpink underline wavy',
      textUnderlinePosition: 'under',
    },
    footer: {
      fontSize: '16px',
    },
    'pre,code': {
      fontFamily: `${fonts.GTPressuraRegular}, monospace`,
    },
  }),
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
