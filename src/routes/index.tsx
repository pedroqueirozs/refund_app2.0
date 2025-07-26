import { BrowserRouter } from "react-router";
import { ManageRoutes } from "./ManagerRoutes";
import { Loading } from "../components/Loading";
import { EmployRoutes } from "./EmployRoutes";
import { AuthRoutes } from "./AuthRoutes";

const isLoading = false;
const session = {
  user: {
    role: "",
  },
};

export function Routes() {
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
