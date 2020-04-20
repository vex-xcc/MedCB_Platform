import React, { Component } from "react";
import { AddNewCustomer } from '../api';
import Back from "./Back";
import "./login.css";
import Swal from "sweetalert2";
export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            FullName: "",
            Username: "",
            password: "",
            Email: "",
            Phone: "",
            UserType: "Students",
            SchoolName: '',
            NationalId: '',
            Worker: false,
        };

        this.change = this.handleChange.bind(this);
        this.submit = this.formSubmit.bind(this);
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    // Function to set data in ServiceDescription state
    addCustomer = Customer => {

        // Make an api call request to add a new user 
        AddNewCustomer(Customer)
            .then(response => {
                if (response.data.success === false) {
                    Swal.fire(` ${response.data.message} `, "", 'error');
                } else if (response.data.success === true) {
                    Swal.fire(`The User ${Customer.Username} has been added successfully.`, "", 'success');
                }
            })
            .catch(error => {
                Swal.fire(`Wrong ${error}`, "", 'error');


            });
    };

    formSubmit = e => {
        // set the object of new user data 
        const newCustomer = this.state;
        e.preventDefault();
        this.addCustomer(newCustomer);
    };

    render() {
        return (
            <div>

                <form className="login" onSubmit={e => this.submit(e)}>
                    <input
                        type="text"
                        placeholder="FullName"
                        name="FullName"
                        onChange={e => this.change(e)}
                        value={this.state.FullName}
                    />
                    <input
                        type="text"
                        placeholder="NationalId"
                        name="NationalId"
                        onChange={e => this.change(e)}
                        value={this.state.NationalId}
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        name="Username"
                        onChange={e => this.change(e)}
                        value={this.state.Username}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        name="Email"
                        onChange={e => this.change(e)}
                        value={this.state.Email}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={e => this.change(e)}
                        value={this.state.password}
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        name="Phone"
                        onChange={e => this.change(e)}
                        value={this.state.Phone}
                    />
                    <input
                        type="text"
                        placeholder="School Name"
                        name="SchoolName"
                        onChange={e => this.change(e)}
                        value={this.state.SchoolName}
                    />

                    <br></br>
                    <Back />


                </form>
                <h2>&nbsp;</h2>


            </div>

        );
    }
}
