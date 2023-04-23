import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
import HomeComponent from "./home/index.js";
import {Routes, Route, Navigate} from 'react-router';
import ExploreComponent from "./explore/index.js";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer.js";
import tuitsReducer from "./tuits/tuits-reducer.js";
import profileReducer from "./profile/profile-reducer.js";
import EditProfileComponent from "./edit-profile/edit-profile.js";
// import profileReducer from "./profile/profile-reducer";
import ProfileComponent from "./profile/index.js";

const store = configureStore({
    reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer
    }
})

function Tuiter() {
    return (<Provider store={store}>
        <div className={"flex-container mx-auto row pt-2 mx-2"}>
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="/" element={<Navigate to="/"/>}/>
                    <Route path="" element={<Navigate to=""/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="edit-profile" element={<EditProfileComponent/>}/>
                </Routes>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    </Provider>);

}

export default Tuiter