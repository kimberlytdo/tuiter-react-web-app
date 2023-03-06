import React from "react";
import tuitArray from './tuit.json';
import TuitItem
    from "./tuits.js";

const TuitList = () => {
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