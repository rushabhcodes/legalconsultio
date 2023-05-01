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
    <div className={robotoSerif.className}>
      <Head>
        <title>Legal Consultio</title>
        <meta name="The Law firm believes that the Indian Legal System is very
                highly complex, yet there are some extremely simple solution." content="Free consulting for people residing in Dahanu." />
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
  );
}

export default App;
