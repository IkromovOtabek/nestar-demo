import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT - PAGES ROUTER");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF_8" />
        <meta name="title" content="Nestar DEMO" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />
        {/*SEO */}
        <meta name="keyword" content={"nestar, nestar.uz,"} />
        <meta
          name="description"
          content={
            "Buy and sell properties anywhere anytime in South korea | " +
            "Покупка и продажа недвижимости в Южной Корее в любое время и в любом месте. | " +
            "한국 어디에서든 언제든지 부동산을 사고팔 수 있습니다."
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
