import React from 'react';
import logo from './logo.svg';
import './App.css';
// import StudentHeader from './components/student/StudentHeader/StudentHeader'
import ManagerHeader from './components/manager/managerHeader/ManagerHeader'

function App() {
  return (
    <div className="App">
      {/* <StudentHeader/> */}
      <ManagerHeader/>
    </div>
  );
}

export default App;
