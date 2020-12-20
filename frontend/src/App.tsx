import React, { ReactElement, useState, useEffect } from "react";
import { setAccessToken } from "./accessToken";
import Routes from "./Routes";

export default function App(): ReactElement {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      credentials: "include",
    }).then(async (x) => {
      const { accessToken } = await x.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <div>LOADING... please wait for a moment.</div>;
  }
  return <Routes />;
}
