import React, { Component } from "react";
import axios from "axios";
import apiURL from '../../APIconfig';
import { getInfo } from "./decodeToken";
import { Route, BrowserRouter, Link } from "react-router-dom";
import "./login.css";
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
          history.push("/StudentHeader");
          Swal.fire(`welcome ${getInfo().data.UserName}`, "", 'success');

        } else if (jwt1 === undefined) {
          console.log("b: ", jwt1);
          history.push("/");
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
          history.push("/TrainerHeader");
          Swal.fire(`welcome ${getInfo().data.UserName}`, "", 'success');
        }
        else if (jwt2 === "Manager") {
          history.push("/ManagerHeader");
          Swal.fire(`welcome ${getInfo().data.UserName}`, "", 'success');

        }
        else if (jwt2 === undefined) {
          console.log("b: ", jwt2);
          history.push("/homathon_test");
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
        <div>

          <form className="login" >
            <input
              type="text"
              name="UserName"
              placeholder="UserName"
              onChange={e => this.change(e)}
              value={this.state.UserName}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={e => this.change(e)}
              value={this.state.password}
            />
            <button
              onClick={e => this.submit(e)}>تسجيل الدخول للمرتادين</button>
        <button
              onClick={e => this.handelSubmit(e)}>تسجيل الدخول للمدربين</button>
            <br></br>
            <button><Link to="/register">Register </Link> </button>




          </form>
          <h2>&nbsp;</h2>

        </div>
        <Route
          path="/register"
          render={() => <Register history={this.props.history} />}
        />
      </BrowserRouter>
    );
  }
}

export default Login;
