import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export interface LayoutProps {
  wrapInsideMain?: boolean;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ title, wrapInsideMain, children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <title>{title || "Picod"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      {wrapInsideMain ? <main>{children}</main> : children}
      <Footer />
    </>
  );
};

export default Layout;
