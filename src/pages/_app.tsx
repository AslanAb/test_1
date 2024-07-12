import type { AppProps } from "next/app";
import Wrapper from "@/app/components/Wrapper";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingContext, useLoading } from "@/app/utils/loading_context";

function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingContext.Provider value={useLoading()}>
      <NextUIProvider>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
        <ToastContainer position="top-center" />
      </NextUIProvider>
    </LoadingContext.Provider>
  );
}

export default appWithTranslation(App);
