import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/userOperations';
import { useUser } from '../hooks/hook';
import { RestrictedRoute } from 'hooks/RestrictedRoute';
import { PrivateRoute } from 'hooks/PrivateRoute';

import { Home } from 'pages/Home';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { Contacts } from 'pages/Contacts';

// const Home = lazy(() => import('pages/Home'));
// const Register = lazy(() => import('pages/Register'));
// const Login = lazy(() => import('pages/Login'));
// const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useUser();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Routes>
        <Route path="/" element={<Navigation />}>
          {/* <Route path="/" element={<Navigate to="/home" />} /> */}
          {/* path="home" */}
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="contacts"
            element={<PrivateRoute redirectTo="/" component={<Contacts />} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
