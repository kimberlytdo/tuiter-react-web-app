import React from "react";
import tuitArray from './tuits.json';
import TuitItem
    from "./tuits.js";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuitArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group border-0">
            {
                tuitArray.map(tuit =>
                    <TuitItem
                        key={tuit._id}
                        tuit={tuit}
                    />
                )
            }
        </ul>
    );
};

export default TuitList;