import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

import { AppRoutes } from "../types";

import { DashboardLayout } from "./../features";

// pages
const Dashboard = lazy(() => import("./../page/dashboard"));

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index path={AppRoutes.DASHBOARD} element={<Dashboard />} />
        <Route
          path={AppRoutes.AUTH}
          element={<Navigate to={AppRoutes.DASHBOARD} />}
        />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
