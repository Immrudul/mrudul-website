import Head from "next/head";

export default function Canonical() {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://mrudulsuresh.com" key="canonical" />
      </Head>
    </div>
  );
}
