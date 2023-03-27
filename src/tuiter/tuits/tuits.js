import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer.js";
import {loveClick} from "../tuits/tuits-reducer.js";

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
            replies: 123,
            retuits: 432,
            likes: 2345,
            handle: "@spacex",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    const loveClickHandler = (id) => {
        console.log(tuit.liked);
        dispatch(loveClick(id));
        console.log(tuit.liked);
    }

    return(
        <li className="list-group-item border-0">
            <div className="row">
                <div className="col-1 ">
                    <img className="float-end rounded-pill" src={`../images/${tuit.image}`} height="40px"/>
                    {/*<img width={70} className="float-end rounded-3" src={`/images/${post.image}`}/>*/}
                </div>
                <div className="col-11 ">
                    <div className="fw-bolder">
                        {tuit.userName} <i className="fas fa-check-circle ps-1"></i><i
                        className="bi bi-check-circle-fill text-primary"></i>&nbsp;&nbsp;
                        <span className="text-secondary fw-normal wd-text-post-small">{tuit.subName} -  {tuit.time}</span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <div className="pt-1 pb-2">
                        {tuit.tuit}

                    </div>
                    <div className="border rounded">
                        <div className="text-secondary wd-text-post-small">
                            {tuit.link}
                        </div>
                    </div>

                    <div>

                        <i className="far fa-comment ps-1 pt-3 text-secondary"></i><i className="bi bi-chat"></i>
                        <label className=" ps-1 pe-5 pt-3 text-secondary">{tuit.replies}</label>

                        <i className="fas fa-retweet ps-1 pt-3 text-secondary"></i><i
                        className="bi bi-arrow-repeat"></i>
                        <label className=" ps-1 pe-5 pt-3 text-secondary">{tuit.retuits}</label>

                        <span onClick={loveClickHandler}><i className="far fa-heart ps-1 pt-3 text-secondary"></i>
                                  <b>{ tuit.liked ?
                                <i className="bi bi-heart-fill text-danger"></i> : <i className="bi bi-heart"></i>}</b>
                            <label className=" ps-1 pe-5 pt-3 text-secondary">{tuit.likes}</label></span>

                        <i className="bi bi-share"></i>
                    </div>
                </div>

            </div>
        </li>
    );
};
export default TuitItem;

