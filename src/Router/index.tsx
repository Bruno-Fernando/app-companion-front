import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="*" element={<Home />} />
      </Route>
    </>
  )
);

export default router;
