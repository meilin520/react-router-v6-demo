import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../../utils/auth';

const RequireAuth = ({ children }) => {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    return children;
}
export default RequireAuth;