import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Page from '../component/Page';
import { ReactNode } from 'react';

type Props = {
  Component?: any;
  ctx: any;
};
function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  );
}

App.getInitialProps = async function ({ Component, ctx }: Props) {
  let pageProps: any = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};
export default App;
