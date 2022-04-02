import React from "react";
import MainNav from "./MainNav";

import { Container, Content, Footer } from "rsuite";

const Layout = ({ children }) => {
  return (
    <div>
      <Container
        style={{
          backgroundColor: "#F0F0F0",
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <MainNav />
        <Container>
          <Content>{children}</Content>
          <Footer>Grupo 1 - Hard Babies 2021</Footer>
        </Container>
      </Container>
    </div>
  );
};

export default Layout;
