import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import cookie from "react-cookies";
import { ACCESS_TOKEN } from "../../../constants/constants";
import { useAppContext } from "../../../context/context";
import UserService from "../../../services/userService";

const OAuth2RedirectHandler = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated, currentUser, setCurrentUser] =
    useAppContext();

  useEffect(() => {
    console.log(router.query.token);
    if (router.query.token) {
      cookie.save(ACCESS_TOKEN, router.query.token, { path: "/" });
      UserService.getCurrentUser()
        .then((response) => {
          console.log(response);
          setAuthenticated(true);
          setCurrentUser(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  });
  return null;
};

export default OAuth2RedirectHandler;
