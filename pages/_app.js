import Router from "next/router";
import NProgress from "nprogress";
import NextHead from "../src/components/NextHead";

import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextHead>
        <link rel="stylesheet" href="/assets/css/nprogress.css" />
      </NextHead>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
