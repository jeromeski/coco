import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import SurveyNew from "./SurveyNew";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' component={Landing} />
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/surveynew' component={SurveyNew}/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
