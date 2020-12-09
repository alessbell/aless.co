import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { Maybe, SiteSiteMetadata, ImageSharp } from '../../graphql-types';

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
