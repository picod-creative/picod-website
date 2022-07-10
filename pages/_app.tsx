import '../styles/globals.css';
import type { AppPropsWithLayout } from '../src/@types';
import type { EmotionCache } from '@emotion/cache';
import createEmotionCache from '../src/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import { CssBaseline } from '@mui/material';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppPropsWithLayout {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
