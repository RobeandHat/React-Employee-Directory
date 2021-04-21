import React, { Component } from "react";
import API from "../utils/API";
import EmployeeList from "../components/EmployeeList";
import EmployeeSearch from "../components/EmployeeSearch";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";

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
        searchResults: res.data.results,
      });
    });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    const searchResults = this.state.searchResults.filter((employee) => {
      return employee.name.last.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({ employees: searchResults });
  };

  render() {
    return (
      <>
        <Container>
          <Jumbotron />
          <EmployeeSearch
            style={{ margin: 10 }}
            input={this.state.input}
            handleInputChange={this.handleInputChange}
          />
          <EmployeeList employees={this.state.employees} />;
        </Container>
      </>
    );
  }
}

export default Main;
