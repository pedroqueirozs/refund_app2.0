import { BrowserRouter } from "react-router";
import { ManageRoutes } from "./ManagerRoutes";
import { Loading } from "../components/Loading";
import { EmployRoutes } from "./EmployRoutes";
import { AuthRoutes } from "./AuthRoutes";

import { useAuth } from "../hooks/useAuth";

export function Routes() {
  const { session, isLoading } = useAuth();

  function Route() {
    switch (session?.user.role) {
      case "employee":
        return <EmployRoutes />;
      case "manager":
        return <ManageRoutes />;
      default:
        return <AuthRoutes />;
    }
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
