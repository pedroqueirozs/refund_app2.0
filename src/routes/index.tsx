import { BrowserRouter } from "react-router";
/* import { AuthRoutes } from "./AuthRoutes"; */
import { ManageRoutes } from "./ManagerRoutes";
/* import { EmployRoutes } from "./EmployRoutes"; */

export function Routes() {
  return (
    <BrowserRouter>
      {/* <AuthRoutes /> */}
      {/* <EmployRoutes /> */}
      <ManageRoutes />
    </BrowserRouter>
  );
}
