import React from 'react';
import apiURL from'./APIconfig';

// Components
import AuthComponent from './components/login/AuthenticatedComponent';
// import Register from './components/login/Register'
// import Login from './components/login/Login'
import StudentHeader from './components/student/StudentHeader/StudentHeader'
// import ManagerHeader from './components/manager/ManagerHeader/managerHeader'
import { Route, BrowserRouter, Switch } from "react-router-dom";


export default class App extends React.Component {


  render(){
    return (
      <BrowserRouter>
     <Switch>
      {/* <Route path={'/'} exact component={Login}/> 
      <Route
          path="/register"
          render={() => <Register  history={this.props.history}  />}
        /> */}
    {/* <AuthComponent> */}
    <Route path={'/StudentHeader'} component={StudentHeader}/> 
      {/* </AuthComponent> */}
        </Switch>
      </BrowserRouter>


    );
  }
}