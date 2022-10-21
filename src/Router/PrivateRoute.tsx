import { Navigate, Outlet } from 'react-router-dom';

import { isAuthenticated } from '../Shared/Utils/Auth';

function PrivateRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
