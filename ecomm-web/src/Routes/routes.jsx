import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "../Components/login";

export const RouteData = (props) => {
    console.log(props);
    return (
        <Routes>    
          <Route path="/" exact element={<Login {...props}/>} />
          {/* <Route>
            <div>Error 404 </div>
            <Link to="/">GO BACK HOME</Link>
          </Route> */}
        </Routes>
    );
  }