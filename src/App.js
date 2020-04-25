import React from 'react';

// Components
import InstructorsAuthenticatedComponent from './components/login/InstructorsAuthenticatedComponent'
// import Register from './components/login/Register'
// import Login from './components/login/Login'
import StudentHeader from './components/student/StudentHeader/StudentHeader'
import ManagerHeader from './components/manager/managerHeader/ManagerHeader';
import TrainerHeader from './components/trainer/trainerHeader/TrainerHeader';
import Login from './components/login/Login'
import Register from './components/login/Register'
import { Route, BrowserRouter, Switch } from "react-router-dom";


export default class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/homathon_test'} exact component={Login} />
          <Route
            path={'/register'}
            render={() => <Register history={this.props.history} />}
          />
          <InstructorsAuthenticatedComponent>
            <Route path={'/ManagerHeader'} component={ManagerHeader} />
            <Route path={'/TrainerHeader'} component={TrainerHeader} />
            <Route path={'/StudentHeader'} component={StudentHeader} />
          </InstructorsAuthenticatedComponent>
        </Switch>
      </BrowserRouter>

    );
  }
}