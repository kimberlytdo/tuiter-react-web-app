import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks.js";
import TuitStats from "./tuits-stats.js";

const TuitItem = (
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

    return(
        <div className="list-group-item d-flex">
            <img
                className="wd-profile-pic rounded-circle"
                src={`/images/${tuit.image}`}
                alt={tuit.userName}
                width={20}
                height={20}
            />
            <div className="ps-3 w-100">
                <ul className="pb-3">
                    <li>
                        <span className="fw-bold">{tuit.username}</span>{" "}
                        <i className="bi bi-patch-check-fill text-primary"></i>{" "}
                        {tuit.handle} · {tuit.time}
                        <i className="bi bi-x-lg float-end"
                           onClick={() => dispatch(deleteTuitThunk(tuit._id))}></i>
                    </li>
                    <li>{tuit.tuit}</li>
                </ul>
                <TuitStats tuit={tuit} />
            </div>
        </div>
    );
};
export default TuitItem;

