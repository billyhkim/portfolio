import Document, { Head, Main, NextScript, Html } from 'next/document';

import { getSiteMetaData } from '../util/helpers';

const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export default class MyDocument extends Document {
  render() {
    const siteMetaData = getSiteMetaData();

    return (
      <Html lang={siteMetaData.language}>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${trackingId}');
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
