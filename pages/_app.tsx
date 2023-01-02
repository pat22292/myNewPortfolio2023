import React, { useState } from "react"
import PropTypes from 'prop-types';
import '../styles/index.css'
import { wrapper } from "../redux/store"
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
// import "swiper/components/effect-fade/effect-fade.scss";

// swiper bundle styles
import 'swiper/css/bundle'

// swiper core styles
import 'swiper/css'

// modules styles
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'


import Head from "next/head";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { CustomEase } from "gsap/dist/CustomEase";


gsap.registerPlugin(TextPlugin, CustomEase);



function MyApp(props) {
  const { Component, pageProps } = props;
  return (

    <React.Fragment>
      <Head>
        <link rel="icon" type="image/gif" href="data:image/jpeg;base64,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" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
// export default MyApp
