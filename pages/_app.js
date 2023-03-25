import "../styles/globals.css";
import '../components/WorkCard/style.css';
import '../components/Skills/styles.css';
import '../components/Contact/style.css';
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
