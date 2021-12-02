import { Switch, Route, Redirect } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';

export const Path = {
  home: '/',
  auth: '/auth',
};

const Routes = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route exact={true} path={Path.home} component={Home} />
        <Route path={Path.auth} component={Auth} />
        <Redirect to={Path.home} />
      </Switch>
    </div>
  );
};

export default Routes;
