import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";

import App from "../App";
import PrivateRoutes from "./PrivateRoutes";
import { useAuth } from "./../hooks";
import { AppRoutes } from "../types";
import { useAppSelector } from "./../lib";
import { auth } from "./../lib";

// pages
const Login = lazy(() => import("./../page/auth/login"));

const ApplicationRoutes = () => {
  const { isAuthenticated } = useAuth();
  const { isUserLoggedIn } = useAppSelector(auth.selectedAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          {isAuthenticated || isUserLoggedIn ? (
            <>
              <Route
                path={AppRoutes.AUTH}
                element={<Navigate to={AppRoutes.DASHBOARD} />}
              />
              <Route path={AppRoutes.ALL} element={<PrivateRoutes />} />
            </>
          ) : (
            <Route
              path={AppRoutes.ALL}
              element={<Navigate to={AppRoutes.LOGIN} />}
            />
          )}
          <>
            <Route path={AppRoutes.AUTH} element={<Login />} />
          </>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
