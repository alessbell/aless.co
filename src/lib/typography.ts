import Typography from 'typography';
import { BORDER_COLOR } from '../components/styles';
import '../css/font-face.css';

export const fonts = {
  GTPressuraRegular: 'GT Pressura Mono Regular',
  GTPressuraBold: 'GT Pressura Mono Bold',
  UntitledRegular: 'Untitled Sans',
};

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  headerLineHeight: 1.4,
  headerFontFamily: [fonts.GTPressuraBold, 'monospace'],
  bodyFontFamily: [fonts.UntitledRegular, 'sans-serif'],

  overrideStyles: () => ({
    'h1,h2': {
      color: BORDER_COLOR,
      fontSize: '1.75rem',
      position: 'relative',
      textShadow: '5px 5px 1px rgba(0, 0, 0, 0.05)',
    },
    h3: {
      marginTop: '0',
      fontSize: '1.15rem',
    },
    'h1,h2,h3': {
      marginBottom: '0.25rem',
    },
    'h1,h2,h4,h5,h6': {
      marginTop: '2.5rem',
    },
    'p,ul': {
      marginBottom: '1.75rem',
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
      color: 'blue',
      textDecoration: 'hotpink underline wavy',
      textUnderlinePosition: 'under',
    },
    'a:hover': {
      color: 'black',
      backgroundColor: 'yellow',
    },
    footer: {
      fontSize: '16px',
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
