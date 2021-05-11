import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div className="container">
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Employee:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Name"
          id="term"
        />
      </div>
    </form>
    </div>
  );
}

export default SearchForm;
