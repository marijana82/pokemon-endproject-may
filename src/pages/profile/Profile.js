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
                        <h4>Welcome to Poke Berry App,</h4>
                        <h2>{user.username}</h2>

                    </div>


                    <div className="profile-article">

                        <h4>Protected data:</h4>

                        {Object.keys(profileData).length > 0 &&
                            <ul>
                                <li>{user.email}</li>
                            </ul>
                        }

                    </div>

                    <div className="profile-article">
                        <p>Go back to <Link to="/">Home page</Link></p>
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