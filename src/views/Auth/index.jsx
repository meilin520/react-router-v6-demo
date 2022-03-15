import { Link, Outlet  } from 'react-router-dom';
import AuthStatus from "./AuthStatus";

import AuthProvider from './AuthProvider';

const AuthLayout = () => {
    return (
        <AuthProvider>
            <AuthStatus />

            <ul>
                <li>
                    <Link to="/auth">Public Page</Link>
                </li>
                <li>
                    <Link to="/auth/protected">Protected Page</Link>
                </li>
            </ul>

            <Outlet />
        </AuthProvider>
    );
}

export default AuthLayout;