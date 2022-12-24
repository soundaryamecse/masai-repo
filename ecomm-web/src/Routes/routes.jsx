import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Login } from "../Components/login";

export const RouteData = (props) => {
    debugger;
    return (
        <Routes>    
          <Route path="/" exact component={<Login {...props}/>} />
          <Route path="/login" render={()=><Login {...props}/>} />
          {/* <Route path="/dashboard" exact render={() => <Dashboard />} />           */}
          {/* <Route path="/ledger" render={(props)=><Ledger {...props} />} />            */}
          {/* <Route>
            <div>Error 404 </div>
            <Link to="/">GO BACK HOME</Link>
          </Route> */}
        </Routes>
    );
  }