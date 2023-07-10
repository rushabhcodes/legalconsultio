import Script from "next/script";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
import { Roboto_Serif, Tinos } from "next/font/google";
import Head from "next/head";

const robotoSerif = Tinos({
  subsets: ["latin"],
  weight: ['400', '700'],
}


);

config.autoAddCss = false;

function App({ Component, pageProps, router }: AppProps) {
  return (
    <>

      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-T9X9YG7T5S" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T9X9YG7T5S', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />

      <div className={robotoSerif.className}>
        <Head>
          <title>Legal Consultio</title>
          <meta name="Legalconsultio by Prakash Thakkar" content="Prakash Thakkar | Dahanu | Instant consultation anytime & anywhere. Consult the best Legal Minds in India" />
        </Head>
        <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' variants={
          {
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1
            }
          }
        }>
          <Component {...pageProps} />
        </motion.div>
      </div>
    </>);
}

export default App;
