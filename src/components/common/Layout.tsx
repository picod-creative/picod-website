import Head from 'next/head';
import { FC } from 'react';
import Footer from './Footer';
import MessageButton from './MessageButton';
import Navbar from './Navbar';

export interface LayoutProps {
  wrapInsideMain?: boolean;
  mainClassName?: string;
  mainStyle?: React.CSSProperties;
  title?: string;
  showMessageButton?: boolean;
}

const Layout: FC<LayoutProps> = ({
  title,
  wrapInsideMain = true,
  children,
  mainStyle,
  mainClassName,
  showMessageButton = false,
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <title>{title || 'Picod'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      {wrapInsideMain ? (
        <main className={mainClassName} style={mainStyle}>
          {children}
        </main>
      ) : (
        children
      )}
      {showMessageButton ? <MessageButton /> : null}
      <Footer />
    </>
  );
};

export default Layout;
