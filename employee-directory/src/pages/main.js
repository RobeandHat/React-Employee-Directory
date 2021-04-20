import React, { Component } from "react";
import API from "../utils/API";
import EmployeeList from "../components/EmployeeList";
import EmployeeSearch from "../components/EmployeeSearch";

class Main extends Component {
  state = {
    employees: [],
    input: "",
    searchResults: [],
  };

  componentDidMount() {
    API.employees().then((res) => {
      this.setState({
        employees: res.data.results,
      });
    });
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div>
        <EmployeeSearch
          input={this.state.input}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeList employees={this.state.employees} />;
      </div>
    );
  }
}

export default Main;
