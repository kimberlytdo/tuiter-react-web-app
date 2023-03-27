import React from "react";
import TuitList from "../tuits/index.js";
import WhatsHappening from "./whats-happening.js";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeComponent;