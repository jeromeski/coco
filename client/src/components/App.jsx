import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import SurveyNew from "./SurveyNew";
import Header from "./Header";
import * as actions from '../actions'

class App extends Component {
  
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null, actions )(App);
