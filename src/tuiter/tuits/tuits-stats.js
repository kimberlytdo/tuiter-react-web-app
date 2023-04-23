import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks.js";

const TuitStats  = (
    {
        tuit = {
            _id: 234,
            topic: "Space",
            userName: "SpaceX",
            time: "2h",
            title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            image: "spacex.jpeg",
            liked: true,
            replies: 123,
            retuits: 432,
            likes: 2345,
            handle: "@spacex",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const handleLikeClick = () => {
        const newLikesCount = tuit.liked ? tuit.likes - 1 : tuit.likes + 1;
        dispatch(
            updateTuitThunk({
                ...tuit,
                liked: !tuit.liked,
                likes: newLikesCount,
            })
        );
    };
    const handleDislikeClick = () => {
        const newDislikesCount = tuit.disliked
            ? tuit.dislikes - 1
            : tuit.dislikes + 1;
        dispatch(
            updateTuitThunk({
                ...tuit,
                disliked: !tuit.disliked,
                dislikes: newDislikesCount,
            })
        );
    };
    return (
        <div>
            Likes: {tuit.likes}
            <i onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1
            })} className="bi bi-heart-fill me-2 text-danger"></i>
        </div>
    );
};

export default TuitStats;