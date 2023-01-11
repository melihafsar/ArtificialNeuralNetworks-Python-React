import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function RootRoute() {
    const { user, isInitialized } = useAuth();

    if (!isInitialized) {
        return (
            <></>
        )
    }
    if (!user) {
        return (
          <Navigate to="/login"/>
        )
    }
    else{
        return (
            <Navigate to="/homepage"/>
          )
    }
}

export default RootRoute