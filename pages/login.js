import React, { useEffect, useState } from "react";
import { Heading, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { GOOGLE_AUTH_URL } from "../constants/constants";

const loginStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${"../assets/images/Campus_UTEC.png"})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};
const Login = ({ host }) => {
  console.log(host);
  const router = useRouter();
  useEffect(() => {
    console.log(GOOGLE_AUTH_URL + "http://" + host + "oauth2/redirect");
    if (!host) router.push("/login");
  }, []);
  return (
    <div className="login-container">
      <div className="login-content">
        <div style={loginStyle}>
          <Heading
            style={{
              color: "#0090C2",
              WebkitTextStroke: 1,
              WebkitTextStrokeColor: "#0083B1",
              marginBottom: 50,
            }}
          >
            Proyección de Matrícula
          </Heading>
          <a href={GOOGLE_AUTH_URL + "http://" + host + "/oauth2/redirect"}>
            <Image
              src="../assets/images/google.png"
              alt="Google"
              width="30pt"
              style={{ alignSelf: "center", margin: "auto" }}
            />
            Log in with Google
          </a>
        </div>
      </div>
    </div>
  );
};

Login.getInitialProps = async (context) => {
  const { req, query, res, asPath, pathname } = context;
  var host = "";
  if (req) {
    host = req.headers.host; // will give you localhost:3000
  }
  return {
    host: host, // will be passed to the page component as props
  };
};

export default Login;
