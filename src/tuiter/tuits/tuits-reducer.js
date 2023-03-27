import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "spacex.jpeg",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "6h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 // "tuit": "hello",
 "likes": 0,
}

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
  deleteTuit(state, action) {
   const index = state
       .findIndex(tuit =>
           tuit._id === action.payload);
   state.splice(index, 1);
  },

  createTuit(state, action) {
   state.unshift({
    ...action.payload,
    ...templateTuit,
    _id: (new Date()).getTime(),
   })
  },
  loveClick(state, action) {
   state.unshift({
    ...action.payload,
    ...templateTuit,
    liked: true,
    _id: (new Date()).getTime(),
   })
  }
 }
});

export const {createTuit, deleteTuit, loveClick} = tuitsSlice.actions;
export default tuitsSlice.reducer;