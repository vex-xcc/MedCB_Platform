import React, { Component } from "react";
import { AddNewStudent } from '../api';
import Back from "./Back";
import "./login.scss";
import Swal from "sweetalert2";
export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            FullName: "",
            StudentUserName: "",
            password: "",
            Email: "",
            Phone: "",
            UserType: "Students",
            ClubName: '',
            NationalId: '',
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
    addStudent = Student => {

        // Make an api call request to add a new user 
        AddNewStudent(Student)
            .then(response => {
                if (response.data.success === false) {
                    Swal.fire(` ${response.data.message} `, "", 'error');
                } else if (response.data.success === true) {
                    Swal.fire(`The User ${Student.StudentUserName} has been added successfully.`, "", 'success');
                }
            })
            .catch(error => {
                Swal.fire(`Wrong ${error}`, "", 'error');


            });
    };

    formSubmit = e => {
        // set the object of new user data 
        const newStudent = this.state;
        e.preventDefault();
        this.addStudent(newStudent);
    };

    render() {
        return (
            <div>

                <form className="login" onSubmit={e => this.submit(e)}>
                    <input
                        type="text"
                        placeholder="الأسم الكامل"
                        name="FullName"
                        onChange={e => this.change(e)}
                        value={this.state.FullName}
                    />
                    <input
                        type="text"
                        placeholder="رقم الهوية الوطنية"
                        name="NationalId"
                        onChange={e => this.change(e)}
                        value={this.state.NationalId}
                    />
                    <input
                        type="text"
                        placeholder="اسم المستخدم"
                        name="Username"
                        onChange={e => this.change(e)}
                        value={this.state.Username}
                    />
                    <input
                        type="text"
                        placeholder="البريد الإلكتروني"
                        name="Email"
                        onChange={e => this.change(e)}
                        value={this.state.Email}
                    />
                    <input
                        type="password"
                        placeholder="الرقم السري"
                        name="password"
                        onChange={e => this.change(e)}
                        value={this.state.password}
                    />
                    <input
                        type="text"
                        placeholder="رقم الجوال"
                        name="Phone"
                        onChange={e => this.change(e)}
                        value={this.state.Phone}
                    />
                    <input
                        type="text"
                        placeholder="اسم النادي"
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
