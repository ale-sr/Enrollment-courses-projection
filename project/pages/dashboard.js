import React, { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import VerifyUser from "../components/VerifyUser";

const Dashboard = () => {
  return (
    <div>
      <VerifyUser />
      <Heading>Bienvenido</Heading>
    </div>
  );
};

export default Dashboard;
