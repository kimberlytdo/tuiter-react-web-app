import React from "react";
import TuitStats from "./tuit-stats.js";
import "../../styles/styles.css"
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks.js";

const TuitItem = ({
  tuit = {
      userName: undefined,
      time: undefined,
      image: undefined,
      handle: undefined,
      tuit: "",
  },
}) => {
    const dispatch = useDispatch();
    return (
        <div className="list-group-item d-flex">
            <img
                className="wd-profile-pic rounded-circle"
                src={`/images/${tuit.image}`}
                alt={tuit.userName}
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