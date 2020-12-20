import { Response } from "express";
export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie("fid", token, {
    httpOnly: true,
    path: "/refresh_token",
  });
};
