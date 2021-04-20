import React from "react";

const EmployeeList = (props) => {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((result) => (
          <tr>
            <td>{result.name.first}</td>
            <td>{result.name.last}</td>
            <td>{result.email}</td>
            <td>{result.cell}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
