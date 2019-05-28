import * as React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export interface SEOProps {
  /** Description text */
  description?: string;
  /** Language text */
  lang?: string;
  /** SEO keywords */
  keywords?: string[];
  /** Document title */
  title: string;
}

interface SEOData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
}

const SEO: React.FunctionComponent<SEOProps> = ({
  description,
  lang = 'en',
  keywords = [],
  title,
}) => {
  const data: SEOData = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  const metaDescription = description || data.site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          content: metaDescription,
          name: `description`,
        },
        {
          content: title,
          property: `og:title`,
        },
        {
          content: metaDescription,
          property: `og:description`,
        },
        {
          content: `website`,
          property: `og:type`,
        },
        {
          content: `summary`,
          name: `twitter:card`,
        },
        {
          content: data.site.siteMetadata.author,
          name: `twitter:creator`,
        },
        {
          content: title,
          name: `twitter:title`,
        },
        {
          content: metaDescription,
          name: `twitter:description`,
        },
      ].concat(
        keywords.length > 0
          ? {
              content: keywords.join(`, `),
              name: `keywords`,
            }
          : []
      )}
    />
  );
};

export default SEO;
