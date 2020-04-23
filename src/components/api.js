import apiURL from'../APIconfig';
import axios from 'axios';



//---------------The GET Request-------------------

// Find all activity depend on WorkerId and if the ActivityState is open
export const getAllActivity = () =>{
    return axios.get(`${apiURL}/all/Activity`);
  }

export const getAllinstructor = () =>{
    return axios.get(`${apiURL}/all/instructor`);
  }

export const getAllActivityType = (type) =>{
    return axios.get(`${apiURL}/api/activity/${type}`);
  }  
  
export const getAllStudentActivity = (id) =>{
    return axios.get(`${apiURL}/api/activity/${id}`);
  } 

//---------------The PATCH Request-------------------  

export const FinishedActivities = (id ,req) => {
  return axios({
    method: 'patch',
    url: apiURL + `/UpdateActivity/${id}`,
    data:{
      ServiceState: 'Finished',
    }
  })
  } 

  export const StudentsRegisteredInActivity = (StudentID , ActivityID) => {
    return axios({
      method: 'patch',
      url: apiURL + `/PassActivity/${ActivityID}`,
      data:{
        isRegistered: true,
        StudentsRegistered: StudentID
      }
      
    })
  }

//---------------The DELETE Request-------------------   





//---------------The POST Request-------------------  
  //Add new Instructor
  export const AddNewInstructor = req => {
    return axios({
      method: 'POST',
      url: apiURL + '/instructor/register',
      data:{
        FullName:req.FullName,
        InstructorUserName:req.InstructorUserName,
        NationalId:req.NationalId,
        Email:req.Email,
        Phone:req.Phone,
        password:req.password,
        ClubName:req.ClubName,
        InstructorRole:req.InstructorRole,
        InstructorsType:req.InstructorsType
      }
      
    })
  }
  
  export const AddNewStudent = req => {
    return axios({
      method: 'POST',
      url: apiURL + '/student/register',
      data:{
        FullName: req.FullName,
        StudentUserName: req.StudentUserName,
        password: req.password,
        Email:req.Email,
        Phone: req.Phone,
        UserType: req.UserType,
        ClubName: req.ClubName,
        NationalId: req.NationalId,
      }
      
    })
  }

  export const AddNewActivitie = req => {
    return axios({
      method: 'POST',
      url: apiURL + '/student/register',
      data:{
        FullName: req.FullName,
        StudentUserName: req.StudentUserName,
        password: req.password,
        Email:req.Email,
        Phone: req.Phone,
        UserType: req.UserType,
        ClubName: req.ClubName,
        NationalId: req.NationalId,
      }
      
    })
  }