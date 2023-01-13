import "../src/assets/styles/global.scss";
import { AppContextProvider } from "../src/context/appContext";

const AppContainer = ({ Component, pageProps }) => {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
};

export default AppContainer;
