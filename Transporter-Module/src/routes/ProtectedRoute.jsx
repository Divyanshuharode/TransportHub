import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
        navigate("/login")
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;
