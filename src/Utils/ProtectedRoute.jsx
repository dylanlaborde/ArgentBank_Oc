import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router"

const ProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state.auth)

    let location = useLocation();
    if (!user.token && !sessionStorage.getItem("token")) {
        return <Navigate to="/" state={{ from: location}} replace />
    }
    return children;
}

export default ProtectedRoute