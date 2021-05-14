import React, { Component } from 'react';
import API from '../../utils/API';
import SearchForm from '../SearchForm';
import "./style.css";


class Table extends Component {
    state = {
        search: "",
        results: [],
        sortByName: ""
    }

    /* 75 Employees on API */
    componentDidMount() {
        this.searchEmployees("");
    }

    /* get function for API url */
    searchEmployees = (query) => {
        // API.search(query) goes here
      API.getMultipleUsers(query)
          // .then this.setState
        .then((res) => this.setState({ results: res.data.results }))
        .catch((err) => console.log(err));
    };

    /* Search handle */
    handleInputChange = event => {
      if (event.target.name === "search") {
          const search = event.target.value.toLowerCase();
          this.setState({
              search: search
          })
      }
    };

    /* Sort by FIRST NAME */
    sortByFirstName = () => {
        const filteredEmployees = this.state.results.sort((a, b) => {
          if (b.name.first > a.name.first) {
            return -1
          }
          if (a.name.first > b.name.first) {
            return 1
          }
          return 0;
        });
    
        if (this.state.sortByName === "DESC") {
          filteredEmployees.reverse();
          this.setState({ sortByName: "ASC" });
        } else {
          this.setState({ sortByName: "DESC" });
        }
        this.setState({ results: filteredEmployees })
    };
    
    /* Sort by LAST NAME */
    sortByLastName = () => {
        const filteredEmployees = this.state.results.sort((a, b) => {
          if (b.name.last > a.name.last) {
            return -1
          }
          if (a.name.last > b.name.last) {
            return 1
          }
          return 0;
        });
        if (this.state.sortByName === "DESC") {
          filteredEmployees.reverse();
          this.setState({ sortByName: "ASC" });
        } else {
          this.setState({ sortByName: "DESC" });
        }
        this.setState({ results: filteredEmployees })
    };

    render(){
    return (
        <div>
            <SearchForm 
            search={this.state.search}
            handleInputChange={this.handleInputChange} />
            <div className="container mt-3">
            <table className="table table-striped text-center table-hover">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">First Name <span className="sortArrow" onClick={this.sortByFirstName}></span></th>
                        <th scope="col">Last Name <span className="sortArrow" onClick={this.sortByLastName}></span></th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DoB</th>
                    </tr>
                </thead>
                {this.state.results && this.state.results.map(query => 
                query.name.first.toLowerCase().includes(this.state.search) ?
                <tbody key={query.login.uuid}>
                <tr>
                    <th scope="row"><img src={query.picture.thumbnail} alt={query.name.first}/></th>
                    <td>{query.name.first}</td>
                    <td>{query.name.last}</td>
                    <td>{query.phone}</td>
                    <td>{query.email}</td>
                    <td>{query.dob.date}</td>
                </tr>
                </tbody>
                :
                query.name.last.toLowerCase().includes(this.state.search) ?
                <tbody key={query.login.uuid}>
                <tr>
                    <th scope="row"><img src={query.picture.thumbnail} alt={query.name.first}/></th>
                    <td>{query.name.first}</td>
                    <td>{query.name.last}</td>
                    <td>{query.phone}</td>
                    <td>{query.email}</td>
                    <td>{query.dob.date}</td>
                </tr>
                </tbody>
                :
                null
                )}
            </table>
            </div>
        </div>
    );
    }
}

export default Table;