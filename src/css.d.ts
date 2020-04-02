import CSS from 'csstype';

declare module 'csstype' {
  interface Properties {
    // Add a CSS Custom Property
    mixBlendMode?: CSS.MixBlendModeProperty | 'var(--mixBlendMode2)';
  }
}
