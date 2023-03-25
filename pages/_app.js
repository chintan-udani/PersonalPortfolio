import Head from 'next/head';
import "../styles/globals.css";
import '../components/WorkCard/style.css';
import '../components/Skills/styles.css';
import '../components/Contact/style.css';
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
    <script src="https://www.googleoptimize.com/optimize.js?id=OPT-NPBMCTF"></script>
      <link rel="stylesheet" href="../components/WorkCard/style.css" />
      <link rel="stylesheet" href="../components/Skills/styles.css" />
      <link rel="stylesheet" href="../components/Contact/style.css" />
    </Head>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
  );
};

export default App;
