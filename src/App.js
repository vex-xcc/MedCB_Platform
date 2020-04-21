import React from 'react';
import apiURL from'./APIconfig';

// Components
import StudentHeader from './components/student/StudentHeader/StudentHeader'

export default class App extends React.Component {


  render(){
    return (
      <StudentHeader/>

    );
  }
}