import React from "react";
import "./searchStyle.css";

function EmployeeSearch(props) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          value={props.input}
          onChange={props.handleInputChange}
          name="input"
          type="text"
          className="form-control"
          placeholder="Search by Last Name..."
          id="search"
        />
      </div>
    </form>
  );
}

export default EmployeeSearch;
