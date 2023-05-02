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
        user: null,
    });
    const navigate = useNavigate();

    //13. put the state value in the const data (without {} )
    //14. the const data can also accept a function, next to the primitive data

    //15. make just normal functions we can offer to the context consumers (components that are going to use the context)
    function login() {
        //change Logged In from false to true and vice versa
        //here write the state setter function, and give it a new value (for example, !isLoggedIn)
        console.log("User is logged in.");
        setIsAuth({
            isAuthenticated: true,
            user: {
                username: "Marijana Mikolcic",
                email: "marijana@novi.nl",
                password: "",
            }

        });
        navigate("/");
    }

    //16. give the setLoggedIn function to the const data, under a key with a self-made-name
    //==> be careful! don't give () to the function because then it will immediately get fired up, and we don't want that!
    //==> for example, if a button wants to use this function, then the function has to call for the function within the button

    function logout() {
        console.log("User is logged out");
        setIsAuth({
            isAuthenticated: false,
            user: null,
        });
        navigate("/landing-page");
    }



    const contextData = {
        isAuthenticated: isAuth.isAuthenticated,
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