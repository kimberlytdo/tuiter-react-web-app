import React, { useState } from "react";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {updateFirstName,updateProfile} from "../profile/profile-reducer.js"
import { useNavigate } from 'react-router';


const EditProfileComponent = () => {
    let navigate = useNavigate();
    function handleClick() {
        navigate('/tuiter/profile')
    }
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const [firstName,setFirstName] = useState(profile.firstName);
    const [lastName,setLastName] = useState(profile.lastName);
    const [Bio,setBio] = useState(profile.bio);
    const [Birthdate,setBirthdate] = useState(profile.dateOfBirth);
    const [Location,setLocation] = useState(profile.location);
    const [Web,setWeb] = useState(profile.website)

    const updateFirstName = (updatedFirstName) => {
        dispatch(updateFirstName(updatedFirstName))
    }

    const doneEditingProfile = (profile) => {
        dispatch(updateProfile({...profile, firstName:firstName,lastName:lastName,location:Location,bio:Bio,dateOfBirth:Birthdate,website:Web}));
    }

    return(

        <div className = "container border border-light rounded">
            <div className="d-flex">
                <div className="p-2">
                    <Link to="/tuiter/profile" >
                        <i className="fa fa-times mt-2"/>
                    </Link>
                </div>

                <div className="fs-4 fw-semibold p-2">Edit Profile</div>

                <div className="ms-auto p-2">
                    <Link to="/tuiter/profile">
                        <button onClick={() => {doneEditingProfile(profile);handleClick();}}
                                className="rounded-pill btn btn-dark float-end mt-2 ps-3 pe-3 fw-bold">Save</button>
                    </Link>
                </div>
            </div>



            <div className = "col">
                <img className = "img-fluid" alt='#' src={`/images/${profile.bannerPicture}`}></img>
            </div>
            <li className="list-group-item">
                <div className="col-2">

                    <img width = {150} className = "rounded-circle float-left" src={`/images/${profile.profilePicture}`}></img>
                </div>
            </li>
            <div className = "col">
                <label htmlFor="firstname">First Name:</label>
                <input type = "text" className="form-control" id = "firstname" onChange = {(e) => setFirstName(e.target.value)} value = {firstName}></input>
            </div>
            <div className = "col">
                <label htmlFor="lastname">Last Name:</label>
                <input type = "text" className="form-control" id = "lastname" onChange = {(e) => setLastName(e.target.value)} value = {lastName}></input>
            </div>
            <div className = "col pt-2">
                <label htmlFor="Bio">Bio:</label>
                <textarea type = "text" className="form-control" id = "bio" onChange = {(e) => setBio(e.target.value)} value = {Bio}></textarea>
            </div>
            <div className = "col" className = "pt-3 pb-2 mb-2">
                <label htmlFor="location">Location:</label>
                <input type = "text" className="form-control" id = "location" onChange = {(e) => setLocation(e.target.value)} value = {Location}></input>
            </div>
            <div className = "col pt-2">
                <label htmlFor="web">Website:</label>
                <input type = "text" className="form-control" id = "web" onChange = {(e) => setWeb(e.target.value)} value = {Web}></input>
            </div>
            <div className = "col pt-3">
                <label htmlFor="DOB">Date Of Birth:</label>
                <input type = "date" className="form-control" id = "DOB" onChange = {(e) => setBirthdate(e.target.value)} value = {Birthdate}></input>
            </div>
            <br/>
            <br/>
        </div>
    );
};

export default EditProfileComponent;