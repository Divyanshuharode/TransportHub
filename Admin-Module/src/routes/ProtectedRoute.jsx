import { Navigate } from "react-router-dom";
import adminStore from "../store/admin.store";

function ProtectedRoute({ children }) {

    const { isAuthenticated } = adminStore();

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute;