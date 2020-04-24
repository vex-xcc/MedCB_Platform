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
            UserName: "",
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
                    Swal.fire(`The User ${Student.UserName} has been added successfully.`, "", 'success');
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
                <div className="login">


         



                    <div className="align">

                        <div className="grid align__item">

                            <div className="register">

                                <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#8ceabb" /><stop offset="100%" stop-color="#378f7b" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg>

                                <h2>تسجيل حساب جديد</h2>

                                <form action="" method="post" className="form" onSubmit={e => this.submit(e)}>

                                    <div className="form__field">
                                        <input
                                            type="text"
                                            placeholder="الأسم الكامل"
                                            name="FullName"
                                            onChange={e => this.change(e)}
                                            value={this.state.FullName} />
                                    </div>
                                    <div className="form__field">
                                        <input
                                            type="text"
                                            placeholder="رقم الهوية الوطنية"
                                            name="NationalId"
                                            onChange={e => this.change(e)}
                                            value={this.state.NationalId} />
                                    </div>
                                    <div className="form__field">
                                        <input
                                            type="text"
                                            placeholder="اسم المستخدم"
                                            name="UserName"
                                            onChange={e => this.change(e)}
                                            value={this.state.UserName} />
                                    </div>
                                    <div className="form__field">
                                        <input
                                            type="text"
                                            placeholder="البريد الإلكتروني"
                                            name="Email"
                                            onChange={e => this.change(e)}
                                            value={this.state.Email} />
                                    </div>
                                    <div className="form__field">
                                        <input
                                            type="text"
                                            placeholder="رقم الجوال"
                                            name="Phone"
                                            onChange={e => this.change(e)}
                                            value={this.state.Phone} />
                                    </div>
                                    <div className="form__field">
                                        <input
                                            type="text"
                                            placeholder="اسم النادي"
                                            name="ClubName"
                                            onChange={e => this.change(e)}
                                            value={this.state.ClubName} />
                                    </div>
                                    <div className="form__field">
                                        <input
                                            type="password"
                                            placeholder="الرقم السري"
                                            name="password"
                                            onChange={e => this.change(e)}
                                            value={this.state.password}
                                        />
                                    </div>

                                    <Back />

                                </form>
                            </div>

                        </div>
                    </div>
                </div>



            </div>

        );
    }
}
