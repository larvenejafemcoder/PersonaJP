import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

import { notoSansJP, ibmPlexSans } from "../lib/fonts";
import Layout from "../components/layouts/main";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className={`${notoSansJP.variable} ${ibmPlexSans.variable}`}>
        <Layout router={router}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={router.route}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <DefaultSeo {...SEO} />
              <Component {...pageProps} key={router.route} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </div>
    </ThemeProvider>
  );
}
