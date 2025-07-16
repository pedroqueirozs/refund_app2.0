import { Routes, Route } from "react-router";

import { AppLayout } from "../components/AppLayout";

import { Dashboard } from "../pages/Dashbord";
import { Refund } from "../pages/Refund";

import { NotFound } from "../pages/NotFound";



export function ManageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/refund/:id" element={<Refund />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
