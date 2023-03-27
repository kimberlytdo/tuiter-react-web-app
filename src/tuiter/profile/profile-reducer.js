import { createSlice } from "@reduxjs/toolkit";

const profile = {
    "firstName": "Jose", "lastName": "Annunziato", "handle": "@jannunzi",
    "profilePicture": "tesla.png", 	"bannerPicture": "starship.jpeg",
    "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
    "website": "youtube.com/webdevtv",
    "location": "Boston, MA",	"dateOfBirth": "07/07/1968",	"dateJoined": "04/2009",
    "followingCount": 340,	"followersCount": 223
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        updateFirstName(state, action) {
            state.firstName = action.payload.firstName;
        },
        updateProfile(state, action) {
            console.log(action.payload);
            return state = action.payload;
        }
    }
});
export default profileSlice.reducer;
export const {updateFirstName,updateProfile} = profileSlice.actions;