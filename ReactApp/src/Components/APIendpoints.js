
// EC2 Instance and default port and path for API
const EC2Instance = "http://ec2-54-227-124-13.compute-1.amazonaws.com"
const APIURL = EC2Instance + ":8081/api/v1/images"

const API_endpoint = {
    portfolio : APIURL,
    SamsCollection : APIURL + "/SamsCollection",
    limitedPortfolio: APIURL + "/randomImage",
    uploads : "Coming Soon",
    presignedURLTrigger : "https://dp8l534zpa.execute-api.us-east-1.amazonaws.com/test/uploadimage"
};

export default API_endpoint;