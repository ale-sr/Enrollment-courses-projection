import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../context/context";

const VerifyUser = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated, currentUser, setCurrentUser] =
    useAppContext();

  useEffect(() => {
    if (!authenticated) {
      router.push("/login");
    }
  });
  return null;
};

export default VerifyUser;
