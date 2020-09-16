import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

import '../styles/globals.css';
import '../styles/tailwind.css';
import 'typeface-inter';

function MyApp({ Component, pageProps, router }) {
  const MotionWrappedApp = () => (
    <motion.div
      key={router.route}
      initial="start"
      animate="end"
      variants={{
        start: {
          opacity: 0,
        },
        end: {
          opacity: 1,
          transition: { duration: 0.4 },
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );

  return (
    <>
      {router.route !== '/' ? (
        <Layout>
          <MotionWrappedApp />
        </Layout>
      ) : (
        <MotionWrappedApp />
      )}

      {/* Body Borders */}
      <div id="body-border-left" />
      <div id="body-border-right" />
      <div id="body-border-top" />
      <div id="body-border-bottom" />
    </>
  );
}

export default MyApp;
