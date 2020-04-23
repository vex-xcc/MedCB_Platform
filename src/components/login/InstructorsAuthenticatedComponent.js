import React, { Component } from 'react'
import { getJwt } from "./helper";
import { getInfo } from "./decodeToken";
import { withRouter } from "react-router-dom";
 class InstructorsAuthenticatedComponent extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          Instructors: undefined,
          Manager: undefined
        };
      }
    
      componentDidMount() {
        const jwt = getJwt();
        let jwt1 = getInfo().data.InstructorRole;
        // this function is responsible to check if the
        // token is equal to employee or adamant after
        // decrypting that token
        if (!jwt) {
          this.setState({
            Manager: null,
            Instructors: null
          });
          return;
        } else if (jwt1 === "Instructors") {
          this.setState({
            Instructors: jwt
          });
        } else if (jwt1 === "Manager") {
          this.setState({
            Manager: jwt
          });
        }
      }
      render() {
        return (
          <div>
            {/* check if the state the Instructors doesn't equal undefined 
          then the permission we'll go to the second child   */}
            {this.state.Instructors !== undefined
              ? this.props.children[1]
              : this.props.children[0]}
          </div>
        );
      }
    }
export default withRouter(InstructorsAuthenticatedComponent);

