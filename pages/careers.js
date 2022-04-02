import React, { useEffect } from "react";
import { Heading, Image } from "@chakra-ui/react";
import VerifyUser from "../components/VerifyUser";

const Careers = () => {
  return (
    <div style={{ marginTop: 30, alignItems: "center" }}>
      <VerifyUser />
      <Image
        src="../assets/images/carreras-home.png"
        alt="Default image"
        width="30%"
        style={{ alignSelf: "center", margin: "auto" }}
      />
      <Heading style={{ marginTop: 20, color: "#0090C2" }}>
        Aún no has seleccionado ninguna carrera
      </Heading>
    </div>
  );
};

export default Careers;
