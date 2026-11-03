import { Navigate } from "react-router-dom";
import transporterStore from "../store/transporter.store";

function ProtectedRoute({ children }) {
    const { isAuthenticated } = transporterStore();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;