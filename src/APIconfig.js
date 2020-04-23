let apiURL ;


const expressPort = 5000;
const apiUrls = {
    // development:`http://localhost:${expressPort}/api`,
    development:`https://vncplatform.herokuapp.com/api`,
    production:`https://vncplatform.herokuapp.com/api`,
} 

if( window.location.hostname === 'localhost' ){
    apiURL = apiUrls.development;
} else{
    apiURL = apiUrls.production;
}

export default apiURL; 