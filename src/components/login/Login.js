import React, { Component } from "react";
import axios from "axios";
import apiURL from '../../APIconfig';
import { getInfo } from "./decodeToken";
import { Route, BrowserRouter, Link } from "react-router-dom";
import "./login.scss";
import Register from './Register'
import Swal from "sweetalert2";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: "",
      password: "",
    
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    const { history } = this.props

    axios
      .post(`${apiURL}/student/login`, {
        UserName: this.state.UserName,
        password: this.state.password
      })
      .then(res => {
        console.warn("res", res);
        localStorage.setItem("currentUser", res.data.token);
        let jwt1 = getInfo().data.UserType;
        if (jwt1 === "Students") {
          this.props.history.push("/StudentHeader");
          Swal.fire(`welcome ${getInfo().data.UserName}`, "", 'success');

        } else if (jwt1 === undefined) {
          console.log("b: ", jwt1);
          this.props.history.push("/");
          Swal.fire(` ${jwt1}`, "", 'error');
        }
        return res;
      })
      .catch(error => {
        console.log("ERROR: ", error);
        Swal.fire(` Invalid UserName or Password`, "", 'error');

      });
  }

  handelSubmit(e) {
    e.preventDefault();
    const { history } = this.props
    axios
      .post(`${apiURL}/instructor/login`, {
        UserName: this.state.UserName,
        password: this.state.password
      })
      .then(res => {
        console.warn("res", res);
        localStorage.setItem("currentUser", res.data.token);
        let jwt2 = getInfo().data.InstructorRole;
        console.log("b: ", jwt2);
        if (jwt2 === "Instructors") {
          this.props.history.push("/TrainerHeader");
          Swal.fire(`welcome ${getInfo().data.UserName}`, "", 'success');
        }
        else if (jwt2 === "Manager") {
          this.props.history.push("/ManagerHeader");
          Swal.fire(`welcome ${getInfo().data.UserName}`, "", 'success');

        }
        else if (jwt2 === undefined) {
          console.log("b: ", jwt2);
          this.props.history.push("/homathon_test");
          Swal.fire(` ${jwt2}`, "", 'error');
        }
        return res;
      })
      .catch(error => {
        console.log("ERROR: ", error);
        Swal.fire(` Invalid UserName or Password`, "", 'error');

      });
  }

  render() {

    return (
      <BrowserRouter>

        <div className="login">
        <title>Daily UI | #001 - Sign Up</title>
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1"/>


<div class="align">

  <div class="grid align__item">

    <div class="register">

      <svg xmlns="http://www.w3.org/2000/svg" class="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#8ceabb"/><stop offset="100%" stop-color="#378f7b"/></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"/></svg>

      <h2>Sign Up</h2>

      <form action="" method="post" class="form">

        <div class="form__field">
          <input type="text"
              name="UserName"
              placeholder="UserName"
              onChange={e => this.change(e)}
              value={this.state.UserName}/>
        </div>

        <div class="form__field">
          <input               type="password"
             placeholder="••••••••••••"
              name="password"
              onChange={e => this.change(e)}
              value={this.state.password}/>
        </div>

        <div class="form__field"  onClick={e => this.submit(e)}> 
          <input type="submit" value="تسجيل الدخول للمرتادين"/>
        </div>
        <div class="form__field"   onClick={e => this.handelSubmit(e)}> 
          <input className="reg"  type="submit" value="تسجيل الدخول للمدربين"/>
        </div>

      </form>

      <p>Already have an accout? <a href="#">Log in</a></p>

    </div>

  </div>
  </div>
</div>



   
        <button><Link to="/register">Register </Link></button>
        <Route
          path="/register"
          render={() => <Register history={this.props.history} />}
        />
      </BrowserRouter>

    );
  }
}

export default Login;
