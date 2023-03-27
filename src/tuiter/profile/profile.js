import React from "react";
import {Link} from "react-router-dom";

const Profile = (
    {
        profile = {
            "firstName": "Jose", "lastName": "Annunziato", "handle": "@jannunzi",
            "profilePicture": "jose.png", 	"bannerPicture": "polyglot.png",
            "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",	"dateOfBirth": "07/07/1968",	"dateJoined": "04/2009",
            "followingCount": 340,	"followersCount": 223
        }}
) => {


    return(
        <div className = "container border border-light">

            <div className = "col">
                <img className = "img-fluid" alt='#' src={profile.bannerPicture}></img>
            </div>

            <li className="list-group-item">
                <div className="col-2">
                    <img className = "rounded-circle" src={profile.profilePicture}></img>
                    <Link to="/tuiter/edit-profile">
                        <button className="rounded-pill btn btn-outline-secondary text-dark float-end mt-2 ps-3 pe-3 fw-bold">
                            Edit
                        </button>
                    </Link>

                </div>
                <div className="col-8">
                    <h3 className="fw-bold">{profile.firstName} {profile.lastName}</h3>
                    <div className = "text-secondary">{profile.handle}</div>
                </div>
                <div className = "row">
                    <p>{profile.bio}</p>
                </div>

                <div className = "row pb-5 pt-1">
                    <div className = "col">
                        <a href="/#" className = "text-decoration-none text-secondary">
                            <i className="bi bi-geo-alt text-secondary"></i>
                            <span className = ""> {profile.location}</span>
                        </a>
                    </div>

                    <div className = "col">
                        <a href="/#" className = "text-decoration-none text-secondary">
                            <i className="bi bi-search text-secondary"></i>
                            <span className = ""> Born {profile.dateOfBirth}</span>
                        </a>
                    </div>

                    <div className = "col">
                        <a href="/#" className = "text-decoration-none text-secondary">
                            <i className="bi bi-calendar3"></i>
                            <span className = ""> Joined {profile.dateJoined}</span>
                        </a>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col">
                        <p className = "text-secondary"><span className = "text-dark"> {profile.followingCount}</span> Following</p>
                    </div>
                    <div className = "col">
                        <p className = "text-secondary"><span className = "text-dark">{profile.followersCount}</span> Followers</p>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default Profile;