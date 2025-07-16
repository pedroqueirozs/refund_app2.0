import { Routes, Route } from "react-router";

import { AppLayout } from "../components/AppLayout";

import { Dashboard } from "../pages/Dashbord";

import { NotFound } from "../pages/NotFound";

export function ManageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
