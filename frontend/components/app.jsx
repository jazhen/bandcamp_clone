import React from 'react';
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom';
import HeaderContainer from './header/header_container';
import FooterContainer from './footer/footer_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import UserShowContainer from './user/user_show_container';
import { AuthRoute } from '../util/route_util';
import SessionHeader from './header/session_header';

const App = () => {
  const location = useLocation();

  return (
    <>
      {['/login', '/signup'].includes(location.pathname) ? (
        <SessionHeader />
      ) : (
        <HeaderContainer />
      )}
      <main className="main">
        <Switch>
          <Route path="/users/:id" component={UserShowContainer} />
          <Route exact path="/" />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/signup" component={SignupFormContainer} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
      <FooterContainer />
    </>
  );
};

export default withRouter(App);
