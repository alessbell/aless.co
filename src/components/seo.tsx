import React from 'react';

// const SEO = ({
//   title,
//   description,
//   ogImageProp,
//   lang = 'en',
//   keywords = [],
// }: {
//   title: string;
//   description?: string;
//   ogImageProp?: string;
//   lang?: string;
//   keywords?: (string | null | undefined)[];
// }): JSX.Element => {
//   const metaDescription = description || data?.site?.siteMetadata?.description;
//   const author = data?.site?.siteMetadata?.author;
//   const ogImage =
//     ogImageProp ||
//     data?.site?.siteMetadata?.siteUrl?.concat(
//       data?.ogImageDefault?.childImageSharp?.fixed?.src || ''
//     );

//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={title}
//       titleTemplate={`%s | ${data?.site?.siteMetadata?.title}`}
//       meta={[
//         {
//           name: `og:image`,
//           content: ogImage || '',
//         },
//         {
//           name: `image`,
//           property: `og:image`,
//           content: ogImage || '',
//         },
//         {
//           name: `twitter:image`,
//           content: ogImage || '',
//         },
//       ].concat(
//         keywords.length > 0
//           ? {
//               content: keywords.filter((k) => typeof k === 'string').join(`, `),
//               name: `keywords`,
//             }
//           : []
//       )}
//     />
//   );
// };

// export default SEO;

import Head from 'next/head';
import config from '../config';

export default function SEO({
  description,
  title,
}: {
  description?: string;
  title: string;
}): JSX.Element {
  const siteTitle = config.title;

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta name="author" content={config.author} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {/* <meta property="og:image" content={image} /> */}
      {/* <meta property="image" content={image} /> */}
      {/* <meta property="twitter:image" content={image} /> */}
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  );
}
