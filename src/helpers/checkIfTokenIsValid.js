import jwtDecode from "jwt-decode";

//this is a pure javascript function



function checkIfTokenIsValid(token) {
    const decodedToken = jwtDecode(token);
    console.log("The expiry time of this token is: ", decodedToken.exp);
    //which date is today?
    //is the date past the expiry date?
    //if yes, the token is not valid anymore
    //if not, the token is still valid

    return true;
}

export default checkIfTokenIsValid;