import React, { Fragment } from "react";

import Footer from "../containers/Footer";
import Head from 'next/head';
import Header from "../containers/Header";
import Menu from "../containers/Menu";
import Whatsapp from "../components/Whatsapp";

const LayoutOne = (props ) => {
  return (
    <Fragment>

      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>

      <div className="layoutOne"> 
        <Header />
        <Menu />
          {props.children}
          <Whatsapp/>
        <Footer />
      </div> 

    </Fragment>
  );
};
 

export default LayoutOne;
