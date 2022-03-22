import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../public/assets/css/slider.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "../public/assets/icon/custom-icons/css/custom-icons.css";
import "../public/assets/icon/elegant-icons/style.css";
import "../public/assets/css/style.css";
import "../public/assets/css/responsive.css";
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
