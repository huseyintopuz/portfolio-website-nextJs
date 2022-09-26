import Layout from '../components/Layout';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="layout">
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
