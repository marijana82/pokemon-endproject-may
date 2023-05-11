import React, {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import App from "../App";
import jwtDecode from "jwt-decode";
import axios from "axios";

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


//hier in de CustomLoginProvider ontvangen we de hele applicatie in de form van {children}
function CustomLoginProvider({children}) {
    //12. create new state so that we can use dynamic data
    //===> upgraded version: store more info in the state besides false or true
    const [isAuth, setIsAuth] = useState({
        isAuthenticated: false,
        user: null,  //===> information about user
        //status: 'pending',
    });

    //HERE COMES useEffect()! and then the rest (that's what React prefers!)
    useEffect(() => {
        //1. check ==> is er een token?
        const token = localStorage.getItem('token');
        console.log(token);
        //1.a. decode the token
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);

        //2. check ==> is de token nog geldig?
        if(token) {
            //voor nu, this is function that is fetching data and sets it in the state (COPY/PASTED BELOW)
            //the same async function we'll need in function login(), but how to call it there?
            // ==> by taking the function declaration out of the useEffect, put it in the higher scope, and only calling it where we need it
            void fetchUserData(decodedToken, token);

        } else {

        }

        //ZO JA ==> haal de gegevens over deze gebruiker op
        //ZO NEE ==> niks doen, laat de state leeg

    }, []);


    const navigate = useNavigate();

    //HERE IS THE PLACE WHERE I COPY/PASTE THE ASYNC FUNCTION SO THAT BOTH USEEFFECT AND LOGIN FUNCTION CAN REACH THE DECLARATION:
    async function fetchUserData(decodedToken, token) {
        try {
            const response = await axios.get(`http://localhost:3000/600/users/${decodedToken.sub}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(response.data);
            setIsAuth({
                isAuthenticated: true,
                user: {
                    id: response.data.id,
                    username: response.data.username,
                    email: response.data.email,
                }
            });

        } catch(e) {
        }
    }


    //13. put the state value in the const data (without {} )
    //14. the const data can also accept a function, next to the primitive data

    //15. make just normal functions we can offer to the context consumers (components that are going to use the context)

    //this function (login) is responsible for putting the user's info in the state,
    //==>for filling the local storage with the token
    //but it is not used to log the user in over and over again
    function login(token) {
        //1. we krijgen een token aangeleverd (van de backend)
        console.log(token);
        const decodedToken = jwtDecode(token);
        console.log("User is logged in.");
        void fetchUserData(decodedToken, token);
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
                username: "Mary",
                email: "mary@novi.nl",
                //password: "mary321",   ===> we don't save password in the state because that is NOT SAFE!
            }

        });
        navigate("/");
    }

    //16. give the setLoggedIn function to the const data, under a key with a self-made-name
    //==> be careful! don't give () to the function because then it will immediately get fired up, and we don't want that!
    //==> for example, if a button wants to use this function, then the function has to call for the function within the button

    function logout() {
        //1. token uit de Local Storage verwijderen
        localStorage.clear();
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
        //...isAuth ===> this is the whole isAuth object (everything from STATE),
        // ===>spread over the context data variable
        // ===>en alles is direct bereikbaar (on the same level)
        ...isAuth,
        loginFunction: login,
        logoutFunction: logout,
    }

//hier wordt de Provider component gemaakt:
    //de contextData via value property aan de hele app beschikbaar gemaakt
    return(
        <>
            <LoginContext.Provider value={contextData}>
                {children}
            </LoginContext.Provider>

        </>
    );

}

export default CustomLoginProvider;