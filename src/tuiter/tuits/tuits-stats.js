import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks.js";

const TuitStats  = (
    {tuit}
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
        console.log(tuit.liked)
        console.log(newLikesCount)
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
        console.log(tuit.disliked)
        console.log(newDislikesCount)
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