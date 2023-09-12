import Head from "next/head";

const SEO = ({ title, description, image }) => {
  const defaultTitle = "NextJs - Boilerplate code";
  const defaultDescription = "NextJs - Boilerplate code";

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />

      <meta itemProp="name" content={title || defaultTitle} />
      <meta
        itemProp="description"
        content={description || defaultDescription}
      />
      <meta
        itemProp="image"
        content="https://www.pagepe.com/pagepeHeader2.png"
      />

      <meta property="og:url" content="https://www.pagepe.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        property="og:image"
        content="https://www.pagepe.com/pagepeHeader2.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta
        name="twitter:image"
        content="https://www.pagepe.com/pagepeHeader2.png"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default SEO;
