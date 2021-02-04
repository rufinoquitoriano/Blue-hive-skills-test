import React from "react";
import "tailwindcss/tailwind.css";
import { Switch, Route } from "react-router-dom";

//components
import Home from "./component/Home";
import Invoice from "./component/invoice/Invoice";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/invoice" component={Invoice} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
