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
            disliked: true,
            replies: 123,
            retuits: 432,
            likes: 2345,
            dislikes: 122,
            handle: "@spacex",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const handleLikeClick = () => {
        console.log("LIKE")
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
        console.log("DISLIKE")
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
        <ul className="d-flex justify-content-around align-items-center">
            <li>
                <i className="bi bi-chat"></i> {tuit.replies}
            </li>
            <li>
                <i className="bi bi-arrow-clockwise"></i> {tuit.retuits}
            </li>
            <li>
                <i
                    onClick={handleLikeClick}
                    className={`bi ${
                        tuit.liked ? "bi-heart-fill text-danger" : "bi-heart"
                    }`}
                ></i>{" "}
                {tuit.likes}
            </li>
            <li>
                <i onClick={handleDislikeClick}
                    className={`bi ${
                        tuit.disliked
                            ? "bi-hand-thumbs-down-fill text-secondary"
                            : "bi-hand-thumbs-down"
                    }`}
                ></i>{" "}
                {tuit.dislikes}
            </li>
            <li>
                <i className="bi bi-share"></i>
            </li>
        </ul>
    );
};

export default TuitStats;