declare module 'gatsby-mdx' {
  interface MDXRendererProps {
    scope?: object;
    components?: any;
  }
  export class MDXRenderer extends React.Component<MDXRendererProps> {}
}
