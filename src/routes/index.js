import _ from 'lodash';
import { Route } from 'react-router-dom';

export const ROUTE_PATH = {
  login: '/login',
  signup: '/signup',
  home: '/',
};

export const routers = {
  login: {
    key: 'login',
    path: ROUTE_PATH.login,
    component: <div>Login</div>,
  },
  signup: {
    key: 'signup',
    path: ROUTE_PATH.signup,
    component: <div>Sign up</div>,
  },
  home: {
    key: 'home',
    path: ROUTE_PATH.home,
    component: <div>Home</div>,
    exact: true,
    strict: true,
  },
};

export function generateRoutes(routes) {
  return _.map(routes, ({ component, ...rest }) => (
    <Route {...rest}>{component}</Route>
  ));
}
