import React, {createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import App from "../App";

//1. create a context variable, use createContext method of React, and initialize it with an empty object {}
//2. make sure you can export CounterContext, so write export in front of the variable
//3. go to index.js and import <LoginContext.Provider>
//4. create data object in index.js
//5. use value={} property in Provider component to pass data to the <LoginContext>
export const LoginContext = createContext({});

//6. make your own "custom" component so that we can control the data (and so that we can remove it from index.js)
//7. remove data object from index.js and copy/paste it to CustomLoginProvider component
//8. also, remove <LoginContextProvider> and <App/> from index.js and
// ==> copy/paste it in the return statement of the CustomLoginProvider component
//9. destructure {children} in CustomLoginProvider() and write {children} instead of <App/>
//10. Return <App/> to index.js
//11. Wrap <App/> in index.js in <CustomLoginProvider/>



function CustomLoginProvider({children}) {
    //12. create new state so that we can use dynamic data
    //===> upgraded version: store more info in the state besides false or true
    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        user: null,  //===> information about user
    });
    const navigate = useNavigate();

    //13. put the state value in the const data (without {} )
    //14. the const data can also accept a function, next to the primitive data

    //15. make just normal functions we can offer to the context consumers (components that are going to use the context)

    //this function (login) is responsible for putting the user's info in the state,
    //==>for filling the local storage with the token
    //but it is not used to log the user in over and over again
    function login(token) {
        //1. we krijgen een token aangeleverd (van de backend)
        console.log(token);
        console.log("User is logged in.");
        //2. Token in de Local Storage plaatsen
        localStorage.setItem('token', token);


        //3. info in de state plaatsen
        //4. isAuthenticated op TRUE zetten in de state
        setIsAuth({
            isAuthenticated: true,
            user: {
                //instead of this hard-coded data, i have to write a new request
                // ==> to get the right info about the user in the context:
                //===> HOW?
                username: "Marijana",
                email: "marijana@novi.nl",
                //password: "",   ===> we don't save password in the state because that is NOT SAFE!
            }

        });
        navigate("/");
    }

    //16. give the setLoggedIn function to the const data, under a key with a self-made-name
    //==> be careful! don't give () to the function because then it will immediately get fired up, and we don't want that!
    //==> for example, if a button wants to use this function, then the function has to call for the function within the button

    function logout() {
        //1. token uit de Local Storage verwijderen
        console.log("User is logged out");
        //2. gebruikersgegevens uit de state verwijderen
        //3. isAuthenticated op FALSE zetten
        setIsAuth({
            isAuthenticated: false,
            user: null,
        });
        navigate("/landing-page");
    }



    const contextData = {
        ...isAuth, //...isAuth ===> this is the whole isAuth object, spread over the context data variable en alles is direct bereikbaar (on the same level)
        loginFunction: login,
        logoutFunction: logout,
    }


    return(
        <>
            <LoginContext.Provider value={contextData}>
                {children}
            </LoginContext.Provider>

        </>
    );

}

export default CustomLoginProvider;