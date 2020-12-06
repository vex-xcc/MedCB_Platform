import React from 'react';

// Components
import InstructorsAuthenticatedComponent from './components/login/InstructorsAuthenticatedComponent'
import StudentHeader from './components/student/StudentHeader/StudentHeader'
import ManagerHeader from './components/manager/managerHeader/ManagerHeader';
import TrainerHeader from './components/trainer/trainerHeader/TrainerHeader';
import Login from './components/login/Login'
import Register from './components/login/Register'
import { Route, HashRouter, Switch } from "react-router-dom";


export default class App extends React.Component {


  render() {
    return (
      <>
 
      <HashRouter  basename="/homathon_test">
        <Switch>
          <Route path={'/'} exact component={Login} />
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
      </HashRouter>
</>
    );
  }
}