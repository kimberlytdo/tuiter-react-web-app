import React from 'react';
// import Labs from "./labs/index.js";
// import HelloWorld from "./labs/a6/hello-world/index.js";
// import Assignment7 from "./labs/a7/index";
import Tuiter from "./tuiter/index.js";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    {/*<Route index element={<Labs/>}/>*/}
                    {/*<Route path="/hello" element={<HelloWorld/>}/>*/}
                    {/*<Route path="/a7" element={<Assignment7/>}/>*/}
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                    <Route path="/*" element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;