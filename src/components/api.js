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


//---------------The PATCH Request-------------------  




//---------------The DELETE Request-------------------   





//---------------The POST Request-------------------  
