import React from "react";
import "tailwindcss/tailwind.css";
import { Switch, Route } from "react-router-dom";

//components
import Home from "./component/Home";
import AddList from "./component/AddList";
import EditList from "./component/EditList";
import Login from "./component/Login";
import Register from "./component/Register";
import Invoice from "./component/invoice/Invoice";

function App() {
  return (
    <div>
      {/* <Switch>
        <Route path="/" component={Home} />
        <Route path="/addlist" component={AddList} />
        <Route path="/editlist" component={EditList} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch> */}
      <Invoice />
    </div>
  );
}

export default App;
