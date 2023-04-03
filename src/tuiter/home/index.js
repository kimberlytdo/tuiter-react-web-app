import React from "react";
import TuitsList from "../tuits/index.js";
import WhatsHappening from "./whats-happening.js";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;