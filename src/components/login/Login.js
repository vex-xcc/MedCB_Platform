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


     


<div className="align">
  <div className="grid align__item">
   <div className="register">
 
      <h2>تسجيل الدخول</h2>
      <form action="" method="post" className="form">
        <div className="form__field">
          <input type="text"
              name="UserName"
              placeholder="UserName"
              onChange={e => this.change(e)}
              value={this.state.UserName}/>
        </div>
        <div className="form__field">
          <input               type="password"
             placeholder="••••••••••••"
              name="password"
              onChange={e => this.change(e)}
              value={this.state.password}/>
        </div>
        <div className="form__field"  onClick={e => this.submit(e)}> 
          <input type="submit" value="تسجيل الدخول للمرتادين"/>
        </div>
        <div className="form__field"   onClick={e => this.handelSubmit(e)}> 
          <input className="reg"  type="submit" value="تسجيل الدخول للمدربين"/>
        </div>
      </form>
      <p onClick={() => window.location.reload(false)}><Link to="/register">Register </Link> </p>
    </div>
  </div>
  </div>
</div>

     
<Route
          path="/register"
          render={() => <Register  history={this.props.history}  />}
        />
      </BrowserRouter>

    );
  }
}

export default Login;
