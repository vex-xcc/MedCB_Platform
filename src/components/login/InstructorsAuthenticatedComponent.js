import React, { Component } from 'react'
import { getJwt } from "./helper";
import { getInfo } from "./decodeToken";
import { withRouter } from "react-router-dom";
 class InstructorsAuthenticatedComponent extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          Instructors: undefined,
          Manager: undefined,
          user:undefined
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
            Manager: undefined,
            Instructors: undefined,
            user:undefined
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
        } else if (jwt1 === "Students") {
          this.setState({
            user: jwt
          });
        }
      }
      render() {
        
        if(this.state.Manager !== undefined){
          return <> {this.props.children[0]}</>
        }else {
          return <>{this.state.Instructors !== undefined? this.props.children[1] : this.props.children[2]}</>
        }
        
       // return (
          // <div>
            /* check if the state the Instructors doesn't equal undefined 
          then the permission we'll go to the second child   */
            /* {this.state.Instructors !== undefined
              ? this.props.children[1]
              : this.props.children[0]
              }
          </div> */
       // );
      }
    }
export default withRouter(InstructorsAuthenticatedComponent);

