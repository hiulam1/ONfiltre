import { Request } from "express";

const extractAccessTokenFromHeader = (req: Request): string | null => {
  const authHeader = req.headers["authorization"] || "";
  if (authHeader && authHeader.startsWith("Bearer ")) {
    return authHeader.substring(7, authHeader.length);
  } else {
    return null;
  }
};
export default extractAccessTokenFromHeader;