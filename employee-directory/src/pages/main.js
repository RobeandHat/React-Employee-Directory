import React, { Component } from "react";
import API from "../utils/API";
import EmployeeList from "../components/EmployeeList";

class Main extends Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    API.employees().then((res) => {
      this.setState({
        employees: res.data.results,
      });
    });
  }
  render() {
    return <EmployeeList employees={this.state.employees} />;
  }
}

export default Main;
