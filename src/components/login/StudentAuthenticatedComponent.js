import React, { Component } from "react";
import { getJwt } from "./helper";
import { getInfo } from "./decodeToken";
import { withRouter } from "react-router-dom";

class StudentAuthenticatedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    const jwt = getJwt();
    let jwt1 = getInfo().data.UserType;
    // this function check user role in token if it equal to employee or adamant
    // after decrypting that token
    if (!jwt) {
      this.setState({
        Customer: null,
        user: null
      });
      return;
    } else if (jwt1 === "Students") {
      this.setState({
        user: jwt
      });
    } 
  }
  render() {
    if(this.state.user !== undefined){
      return this.props.children[1]
    }
   // return (
      // <div>
        /* check if the state the Worker doesn't equal undefined 
      then the permission we'll go to the second child   */
        /* {this.state.user !== undefined :this.props.children[0]}
      </div> */

 //   );
  }
}

export default withRouter(StudentAuthenticatedComponent);

