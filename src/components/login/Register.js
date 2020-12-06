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
                    Swal.fire(` تم إضاقة المستخدم  ${Student.UserName}  بنجاح `, "", 'success');
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
                <div class="hero">
                    <div className="login">

                        <div className="align">

                            <div className="grid align__item">

                                <div className="register">


                                    <h2>تسجيل حساب جديد</h2>

                                    <form className="form" onSubmit={e => this.submit(e)}>

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
                                                type="password"
                                                placeholder="كلمة المرور"
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



                    <div class="diagonal-hero-bg">
                        <div className="stars">
                            <div className="small"></div>
                            <div className="medium"></div>
                            <div className="big"></div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
