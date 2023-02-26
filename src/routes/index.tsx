import React from "react";
import { PublicRoutes, ROUTES_PUBLIC } from "./publicRoutes";

export const ROUTES = {
  ...ROUTES_PUBLIC,
};

export const AppRoutes = () => {
  return (
    <>
      <PublicRoutes />
    </>
  );
};
