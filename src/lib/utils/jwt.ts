import jwt from "jsonwebtoken";
import config from "@/lib/config/config";

export const createAccessToken = (payload) => {
  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiresin,
  });
};

export const decodeAccessToken = (token) => {
  return jwt.verify(token, config.jwt.secret);
};

export const createRefreshToken = (payload) => {
  return jwt.sign(payload, config.jwt.refresh_secret, {
    expiresIn: config.jwt.refresh_expiresIn,
  });
};

export const decodeRefreshToken = (token) => {
  return jwt.verify(token, config.jwt.refresh_secret);
};
