import Head from 'next/head';
import { FC } from 'react';
import { DimensionContextProvider } from '../common/DimensionContext';
import Footer from '../common/Footer';
import MessageButton from '../common/MessageButton';
import Navbar from '../common/Navbar';

export interface LayoutProps {
  wrapInsideMain?: boolean;
  mainClassName?: string;
  mainStyle?: React.CSSProperties;
  title?: string;
  showMessageButton?: boolean;
  hideNavbar?: boolean;
  hideFooter?: boolean;
}

const FrontLayout: FC<LayoutProps> = ({
  title,
  wrapInsideMain = true,
  children,
  mainStyle,
  mainClassName,
  showMessageButton = false,
  hideNavbar = false,
  hideFooter = false,
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <title>{title || 'Picod'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DimensionContextProvider>
        {!hideNavbar && <Navbar />}
        {wrapInsideMain ? (
          <main className={mainClassName} style={mainStyle}>
            {children}
          </main>
        ) : (
          children
        )}
        {showMessageButton ? <MessageButton /> : null}
        {!hideFooter && <Footer />}
      </DimensionContextProvider>
    </>
  );
};

export default FrontLayout;
