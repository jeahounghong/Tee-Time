import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
const Auth = ({ component: Component, path, isAuthenticated, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to="/events" />
    )
  )} />
);
const Protected = ({ component: Component, path, isAuthenticated, exact }) => {
  // debugger;
  return <Route path={path} exact={exact} render={(props) => (
     isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
  
};
const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated,
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));