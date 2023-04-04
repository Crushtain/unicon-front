import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../widgets/components/layout";
import { wrapper } from '@/shared/lib/store/store';


function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <Layout>
        <Component {...pageProps}/>
      </Layout>
  )
}

export default wrapper.withRedux(App)