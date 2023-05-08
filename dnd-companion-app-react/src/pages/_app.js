import Layout from "@/layout/layout";
import "@/styles/globals.css";
import { wrapper } from "../store/store";
import { Provider } from "react-redux";

const App = ({ Component, pageProps, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
