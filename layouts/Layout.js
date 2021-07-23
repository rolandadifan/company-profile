import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import styles from './layout.module.scss';

const Layout = ({ title, children }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <>
      <Head>{title && <title>{title} · SUBRA UNIQELY NATURE</title>}</Head>
      <Header />
      <main className={!isMobile ? styles.mainContent : styles.mobileContent}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;