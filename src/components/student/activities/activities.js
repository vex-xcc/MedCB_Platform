import React from 'react';
import "./activities.css"
// import { getAllServiceInOnProgress } from '../api';
// import { getInfo } from '../login/decodeToken'

export default class Activities extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            Activities: [
            {    
                TargetAge: 16,
                ClubName: " نادي ٢ ",
                ActivityCreator: "عمر",
                ActivityDescription: " ذكرى اليوم الوطني ",
                ActivityName: "عاشت بلادي",
                ActivityType: "ترفيهي",
                ActivityState: "قيد التسجيل",
                ActivityLocation: "مدارس الرواد",
                StartDate: "يوم الاحد",
                EndDate: "يوم الخميس",
            },
            {
                TargetAge: 16,
                ClubName: " نادي ١ ",
                ActivityCreator: "رنا",
                ActivityDescription: " ذكرى اليوم الوطني ",
                ActivityName: "عاشت بلادي",
                ActivityType: "ترفيهي",
                ActivityState: "قيد التسجيل",
                ActivityLocation: "مدارس الرواد",
                StartDate: "يوم الاحد",
                EndDate: "يوم الخميس",
            },
            {
                TargetAge: 16,
                ClubName: " نادي ٣ ",
                ActivityCreator: "رغد",
                ActivityDescription: " ذكرى اليوم الوطني ",
                ActivityName: "عاشت بلادي",
                ActivityType: "ترفيهي",
                ActivityState: "قيد التسجيل",
                ActivityLocation: "مدارس الرواد",
                StartDate: "يوم الاحد",
                EndDate: "يوم الخميس",
            },
            ],
        };
    }

    // componentDidMount() {
    //     // get the id of curretn user
    //     let ID = getInfo().data._id

    //     // Mack API call 
    //     getAllServiceInOnProgress(ID)
    //         .then((reponse) => {
    //             this.setState({ Activities: reponse.data });
    //         })
    //         .catch((error) => {
    //         })
    // }
    register = (id) => {
        // Make an API Call to register a service

        // console.log( `Make an API Call to register a service the ${id} `)
        // registerOneService(id)
        //    .then((res) => {
        //        const History = this.state.History.filter((History) => {
        //            return History._id !== id; 
        //        });
        //        Swal.fire(`The Service registerd`,"",'success')
        //        this.setState({ History});
        //    })
        //    .catch((err) => {
        //    })
   }

    registerClick = (e) => {
        // e.preventDefault();
        // console.log( `the ${this.props.id}Service  delet Click `)
        // this.props.deletOneSerives(this.props.id);
      }

    render() {

        // variable to show when there no Services in the array 
        let allActivities = <h3> No Received Services.. </h3>
        // if condtion to check the array is greater than zero return and pass the data to ReceivedService components 
        if (this.state.Activities.length > 0) {
            allActivities = this.state.Activities.map((Services, index) => {
                return (
                    <li className='work'>
                        <input className='radio' id={`work${index}`} name='works' type='radio'></input>

                        <div className="relative">
                            <label htmlFor={`work${index}`} >{Services.ActivityName}</label>
                            <span className='date'>{Services.StartDate}</span>
                            <span className='circle'></span>
                        </div>

                        <div className='contents'>
                            <p> {Services.ActivityDescription} </p>
                            <p onClick={this.registerClick}> اشتراك</p>
                        </div>
                    </li>
                );
            })
        }

        return (
            <>
            <div className='allActivities'>
                <p> {`أنشطة ${this.props.type} القادمة`} </p>
            </div>

                <ul className='timeline'>
                    {allActivities}
                </ul>
            </>
        );
    }

} 
