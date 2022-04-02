import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
//import { MemoryRouter as Router } from "react-router-dom";

import "../styles/globals.css";
import "../styles/styles.css";
import { AppWrapper, AppContext, useAppContext } from "../context/context";

import UserService from "../services/userService";

import theme from "../components/Theme";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
