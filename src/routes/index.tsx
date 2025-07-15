import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { EmployRoutes } from "./EmployRoutes";

export function Routes() {
    return (
        <BrowserRouter>
            {/* <AuthRoutes /> */}
            <EmployRoutes />
        </BrowserRouter>
    )

}