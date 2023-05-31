import jwtDecode from "jwt-decode";

//this a helper function and helper function is a pure javascript function, it cannot be a react function (because it is using state)
function checkIfTokenIsValid(token) {
    const decodedToken = jwtDecode(token);
    console.log("The expiry time of this token is: ", decodedToken.exp);
    //which date is today?
    //is today's date past the token's expiry date?
        //if yes, the token is not valid anymore
        //if not, the token is still valid

    return true;
}

export default checkIfTokenIsValid;