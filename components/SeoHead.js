import Head from "next/head";

export default function SeoHead() {
  return (
    <Head>
      {/* Google Tag Manager */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FMY9467XEV"
      ></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FMY9467XEV');
          `,
        }}
      />

      {/* Google Search Console */}
      <meta
        name="google-site-verification"
        content="M1cvr0nhxShjlhiwpfOhEZKjSIvR_7BK4fN4fvN8GQI"
      />
    </Head>
  );
}
