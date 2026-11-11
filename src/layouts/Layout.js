import niceSelect from "niceselectwithsabuj";
import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import BackToTop from "../components/BackToTop";
import ImageView from "../components/ImageView";
import Newsletter from "../components/Newsletter";
import VideoPopup from "../components/VideoPopup";
import { animation, stickyNav } from "../utils";
import Footer from "./footers/Footer";
import Header from "./headers/Header";
import Header1 from "./headers/Header1";

const metaData = {
  "/": {
    title: "Game District | Enterprise AI, Interactive Solutions & IT Services",
    description: "Game District architects, develops, and deploys intelligent AI systems, next-gen interactive solutions, and enterprise IT infrastructure globally."
  },
  "/about": {
    title: "About Game District | Leading AI & Interactive Technology Partner",
    description: "Learn about Game District, our mission, cutting-edge technology solutions, and global digital engineering expertise."
  },
  "/contact": {
    title: "Contact Game District | Get a Free AI & Tech Consultation",
    description: "Connect with the Game District team. Schedule a discovery call for enterprise AI, interactive gaming solutions, and IT infrastructure services."
  },
  "/learning-hub": {
    title: "Practical AI Learning Hub | Game District",
    description: "Build practical AI, machine learning, and advanced engineering capabilities with the Game District Learning Hub."
  },
  "/service": {
    title: "AI & Enterprise Technology Services | Game District",
    description: "Explore Game District's core services: AI automation solutions, intelligent systems, custom platforms, and enterprise cloud & IT capabilities."
  }
};

const Layout = ({ children, noHeader, noFooter, title, description }) => {
  const router = useRouter();

  useEffect(() => {
    niceSelect();
    animation();

    window.addEventListener("scroll", stickyNav);
    if (window.location.href.includes("dark-e-wallet")) {
      document.querySelector("body").classList.add("dark-e-wallet");
    } else {
      document.querySelector("body").classList.remove("dark-e-wallet");
    }
  }, []);

  const path = router.pathname;
  const currentMeta = metaData[path] || {
    title: "Game District | Enterprise AI & Interactive Technology Solutions",
    description: "Architecting, Developing & Deploying Intelligent Systems and Enterprise IT Infrastructure."
  };

  const pageTitle = title || currentMeta.title;
  const pageDescription = description || currentMeta.description;
  const canonicalUrl = `https://gamedistrict.com${path === "/" ? "" : path}`;

  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical Link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://gamedistrict.com/assets/images/logo/logo-1.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content="https://gamedistrict.com/assets/images/logo/logo-1.png" />
      </Head>
      <ImageView />
      <VideoPopup />
      {!noHeader && <Header1 />}
      {children}
      {!noFooter && (
        <Fragment>
          <Newsletter />
          <Footer />
        </Fragment>
      )}
      <BackToTop />
    </Fragment>
  );
};
export default Layout;
