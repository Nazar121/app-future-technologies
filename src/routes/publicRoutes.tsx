import { lazy } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";

// Pages
import Home from "../pages/Home";
const Test = lazy(() => import("../pages/Test"));

export const ROUTES_PUBLIC = {
  HOME: "/home",
  TEST: "/test",
};

const publicRoutes: RouteProps[] = [
  {
    path: ROUTES_PUBLIC.HOME,
    element: <Home />,
  },
  {
    path: ROUTES_PUBLIC.TEST,
    element: <Test />,
  },
];

export const PublicRoutes = () => {
  return (
    <>
      <Routes>
        {publicRoutes.map((route: RouteProps) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
};
