
const APIURL = "http://ec2-18-204-208-65.compute-1.amazonaws.com:8081/api/v1/images"


const API_endpoint = {
    portfolio : APIURL,
    SamsCollection : APIURL + "/SamsCollection",
    limitedPortfolio: APIURL + "/randomImage",
    uploads : "Coming Soon",
    presignedURLTrigger : "https://dp8l534zpa.execute-api.us-east-1.amazonaws.com/test/uploadimage"
};

export default API_endpoint;