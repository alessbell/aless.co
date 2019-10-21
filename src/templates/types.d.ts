declare module '*.png';
declare module 'gatsby-plugin-mdx' {
  interface MDXRendererProps {
    scope?: object;
    components?: any;
  }
  export class MDXRenderer extends React.Component<MDXRendererProps> {}
}

declare namespace jest {
  interface Matchers<R> {
    toHaveAttribute: (attr: string, value?: string) => R;
    toHaveTextContent: (htmlElement: string) => R;
    toHaveClass: (className: string) => R;
    toBeInTheDocument: () => R;
    toBeInTheDOM: () => R;
  }
}
