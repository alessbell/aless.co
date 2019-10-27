declare module '*.png';
declare module 'gatsby-plugin-mdx' {
  interface MDXRendererProps {
    scope?: object;
    components?: any;
  }
  export class MDXRenderer extends React.Component<MDXRendererProps> {}
}

declare namespace jest {
  interface Matchers<R, T> {
    toHaveAttribute: (attr: string, value?: string) => R;
    toHaveTextContent: (htmlElement: string) => R;
    toHaveClass: (className: string) => R;
    toBeInTheDocument: () => R;
    toBeInTheDOM: () => R;
  }
}

declare module '@mdx-js/react' {
  import * as React from 'react';
  type ComponentType =
    | 'p'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'thematicBreak'
    | 'blockquote'
    | 'ul'
    | 'ol'
    | 'li'
    | 'table'
    | 'tr'
    | 'td'
    | 'pre'
    | 'code'
    | 'em'
    | 'strong'
    | 'delete'
    | 'inlineCode'
    | 'hr'
    | 'a'
    | 'img';
  export type Components = {
    [key in ComponentType]?: React.ComponentType<{ children: React.ReactNode }>;
  };
  export interface MDXProviderProps {
    children: React.ReactNode;
    components: Components;
  }
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}
