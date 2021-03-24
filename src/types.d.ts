declare module '*.png';
declare module 'gatsby-plugin-mdx' {
  import * as React from 'react';
  type MDXRendererProps = {
    components?: React.Component;
  };
  export class MDXRenderer extends React.Component<MDXRendererProps> {}
}

declare module '*.svg' {
  const content: unknown;
  export default content;
}

type Maybe<T> = T | null;
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  // eslint-disable-next-line
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by
   * [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
   */
  // eslint-disable-next-line
  JSON: any;
};

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
  export type MDXProviderProps = {
    children: React.ReactNode;
    components: Components;
  };
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}
