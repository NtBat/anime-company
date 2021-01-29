import Head from "next/head";

function NextHead({ title, children }) {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="Description" content="Site"></meta>
      <meta name="robots" content="noindex" />
      {children}
    </Head>
  );
}

export default NextHead;
