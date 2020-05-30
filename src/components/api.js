import apiURL from'../APIconfig';
import axios from 'axios';
//---------------The GET Request-------------------

// Find all User info depend on Id
export const userInfo = (id) =>{
  return axios.get(`${apiURL}/user/${id}`);
}  


// Find all activity depend on WorkerId and if the ActivityState is open
export const getAllActivity = () =>{
    return axios.get(`${apiURL}/all/Activity`);
  }
export const getAllinstructor = (id) =>{
    return axios.get(`${apiURL}/find/all/emp/${id}`);
  }
export const getAllActivityType = (type) =>{
    return axios.get(`${apiURL}/activity/${type}`);
  }  
  // Get all Activity depend on Instructor Id and if the ActivityState is OnProgress
export const getAllActivityOnProgressList = (id) => {
  return axios.get(`${apiURL}/Find/All/OnProgress/Activity/Instructor/${id}`);
}
// Get all Activity depend on StudentId and if the ActivityState is Finshed
export const getAllActivityFinshedList = (id) => {
  return axios.get(`${apiURL}/Find/All/Finished/Activity/Student/${id}`);
}
// Get all Activity depend on StudentId 
export const getAllActivityList = (id) => {
  return axios.get(`${apiURL}/Find/All/Activity/Student/${id}`);
}


// Get all Activity depend on Instructor and if the ActivityState is Finshed
export const getAllActivityFinshedListInstructor = (id) => {
  return axios.get(`${apiURL}/Find/All/Finished/Activity/${id}`);
}
// Get all Activity depend on Instructor 
export const getAllActivityListInstructor = (id) => {
  return axios.get(`${apiURL}/Find/All/Instructor/Activity/${id}`);
}



//---------------The PATCH Request-------------------  
export const FinishedActivities = (id ,req) => {
  return axios({
    method: 'patch',
    url: apiURL + `/UpdateActivity/${id}`,
    data:{
      ActivityState: 'Finished',
    }
  })
  }
  export const ChangeActivitiesToRegistration = (id ,req) => {
    return axios({
      method: 'patch',
      url: apiURL + `/UpdateActivity/${id}`,
      data:{
        ActivityState: 'Registration',
      }
    })
    }  
  export const StudentsRegisteredInActivity = (StudentID , ActivityID) => {
    return axios({
      method: 'patch',
      url: apiURL + `/PassActivity/${ActivityID}`,
      data:{
        StudentsRegistered:StudentID,
        isRegistered:true
      }
    })
  }



//---------------The POST Request-------------------  
  //Add new Instructor
  export const AddNewInstructor = (id,req) => {
    return axios({
      method: 'POST',
      url: apiURL + `/instructor/register/${id}`,
      data:{
        FullName:req.FullName,
        UserName:req.UserName,
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
        UserName: req.UserName,
        password: req.password,
        Email:req.Email,
        Phone: req.Phone,
        UserType: req.UserType,
        ClubName: req.ClubName,
        NationalId: req.NationalId,
      }
    })
  }
  export const AddNewActivitie = (req,Id) => {
    return axios({
      method: 'POST',
      url: `${apiURL}/${Id}`,
      data:{
        TargetAge: req.TargetAge,
        ClubName: req.ClubName,
        ActivityDescription: req.ActivityDescription,
        ActivityName:req.ActivityName,
        ActivityType: req.ActivityType,
        ActivityState: req.ActivityState,
        ActivityLocation: req.ActivityLocation,
        StartDate: req.StartDate,
        EndDate: req.EndDate,
      }
    })
  }