import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
  const expiration = localStorage.getItem("expiration");
  const expirationData = new Date(expiration);
  const now = new Date();
  const duration = expirationData.getTime() - now.getTime();
  return duration;
};

export const getToken = () => {
  if (getTokenDuration() < 0) return "EXPIRED";
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  return token;
};

export const loader = () => getToken();

export const checkAuthLoader = () => {
  const token = getToken();
  if (!token) {
    redirect("/auth");
  }
};
