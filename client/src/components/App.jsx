import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import SurveyNew from "./SurveyNew";
import Header from "./Header";
import { fetchUser } from "../actions/index";

class App extends Component {
  componentDidMount() {}

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

App.propTypes = {
  fetchUser: PropTypes.func.isRequired
};

export default connect(null, { fetchUser })(App);
