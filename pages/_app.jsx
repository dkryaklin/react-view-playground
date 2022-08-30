import { DesignSystemProvider } from "@beamery/lib-ds-components";
import { theme } from "@beamery/lib-ds-theme";
import "./react-view.css";

export default function App({ Component, pageProps }) {
  return (
    <DesignSystemProvider theme={theme}>
      <Component {...pageProps} />
    </DesignSystemProvider>
  );
}
