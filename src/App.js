import React from 'react';
import apiURL from'./APIconfig';

// Components
import StudentHeader from './components/student/StudentHeader/StudentHeader'
import ManagerHeader from './components/manager/ManagerHeader/managerHeader'

export default class App extends React.Component {


  render(){
    return (
      // <StudentHeader/>
      <ManagerHeader/>

    );
  }
}