import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
config.autoAddCss = false;

function App({ Component, pageProps, router }: AppProps) {
  return (
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
  );
}

export default App;
