import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks.js";

const TuitStats = ({
   tuit = {
       liked: false,
       disliked: false,
       replies: 0,
       retuits: 0,
       likes: 0,
       dislikes: 0,
   },
}) => {
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
                <i
                    onClick={handleDislikeClick}
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