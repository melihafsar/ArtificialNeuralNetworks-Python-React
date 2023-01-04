import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
    const { user } = useAuth();
    if (!user) {
        return (
          <Navigate to="/login"/>
        )
    }
    else{
        return (
            children
          )
    }
}

export default PrivateRoute