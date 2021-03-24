import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  repository?: Maybe<Scalars['String']>;
  commit?: Maybe<Scalars['String']>;
};

type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
};

const SEO = ({
  title,
  description,
  ogImageProp,
  lang = 'en',
  keywords = [],
}: {
  title: string;
  description?: string;
  ogImageProp?: string;
  lang?: string;
  keywords?: (string | null | undefined)[];
}): JSX.Element => {
  const data: {
    site: { siteMetadata: SiteSiteMetadata };
    ogImageDefault: { childImageSharp?: Maybe<ImageSharp> };
  } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
      ogImageDefault: file(absolutePath: { regex: "/assets/og-image/" }) {
        childImageSharp {
          fixed(height: 630, width: 1200) {
            src
          }
        }
      }
    }
  `);

  const metaDescription = description || data?.site?.siteMetadata?.description;
  const author = data?.site?.siteMetadata?.author;
  const ogImage =
    ogImageProp ||
    data?.site?.siteMetadata?.siteUrl?.concat(
      data?.ogImageDefault?.childImageSharp?.fixed?.src || ''
    );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data?.site?.siteMetadata?.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription || '',
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription || '',
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `og:image`,
          content: ogImage || '',
        },
        {
          name: `image`,
          property: `og:image`,
          content: ogImage || '',
        },
        {
          name: `author`,
          content: author || '',
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: author || '',
        },
        {
          name: `twitter:title`,
          content: title || '',
        },
        {
          name: `twitter:description`,
          content: metaDescription || '',
        },
        {
          name: `twitter:image`,
          content: ogImage || '',
        },
      ].concat(
        keywords.length > 0
          ? {
              content: keywords.filter((k) => typeof k === 'string').join(`, `),
              name: `keywords`,
            }
          : []
      )}
    />
  );
};

export default SEO;
