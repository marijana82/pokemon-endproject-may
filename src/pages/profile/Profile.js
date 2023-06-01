import "./Profile.css";
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
//import { Link } from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import PageHeader from "../../components/header/PageHeader";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";

function Profile() {
    const [profileData, setProfileData] = useState({});
    const { user } = useContext(LoginContext);

    useEffect(() => {
        async function fetchProfileData() {
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/test/user', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                setProfileData(result.data);

            } catch(e) {
                console.error(e);
            }
        }

        void fetchProfileData();

    }, []);

    return(
        <>
            <PageHeader
                message="Profile Page"
            />

            <Main>

                <div className="profile-article-wrap">

                    <div className="profile-article">
                        <p className="welcome-text-profile">Welcome to Poke Berry App,</p>
                        <p className="welcome-text-username">{user.username}</p>

                    </div>


                    <div className="profile-article">

                        <p className="welcome-text-profile">User data:</p>

                        {Object.keys(profileData).length > 0 &&
                            <ul>
                                <li>Your email:<p className="welcome-text-username"> {user.email}</p></li>
                                <li>Your ID number: <p className="welcome-text-username"> {user.id}</p></li>
                                <li>Your profile photo: <p className="welcome-text-username"> Here comes profile photo </p></li>
                                <li>Recently viewed items: <p className="welcome-text-username">Here come recently viewed items</p></li>
                            </ul>
                        }

                    </div>

                    <div className="profile-article">
                        <p>Go to <Link to="/berry-search-page">Search Berry Page</Link> or return to <Link to="/">Home</Link></p>
                    </div>





                </div>




            </Main>

            <Footer
                message="All Rights Reserved"
                description="Copyright Poke Berry App"
            />



        </>
    )
}


export default Profile;