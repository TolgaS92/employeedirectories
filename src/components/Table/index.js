import React, { Component } from 'react';
import API from '../../utils/API';
import SearchForm from '../SearchForm';

class Table extends Component {
    state = {
        search: "",
        results: [],
        sortByName: ""
    }
    componentDidMount() {
        this.searchEmployees("");
      }
    searchEmployees = (query) => {
        // API.search(query) goes here
      API.getMultipleUsers(query)
          // .then this.setState
        .then((res) => this.setState({ results: res.data.results }))
        .catch((err) => console.log(err));
    };
    handleInputChange = event => {
      if (event.target.name === "search") {
          const search = event.target.value.toLowerCase();
          this.setState({
              search: search
          })
      }
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
                        <th scope="col">Full Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DoB</th>
                    </tr>
                </thead>
                {this.state.results && this.state.results.map(query => (
                <tbody key={query.login.uuid}>
                <tr>
                    <th scope="row"><img src={query.picture.thumbnail} alt={query.name.first}/></th>
                    <td>{query.name.first} {query.name.last}</td>
                    <td>{query.phone}</td>
                    <td>{query.email}</td>
                    <td>{query.dob.date}</td>
                </tr>
                </tbody>
                ))}
            </table>
            </div>
        </div>
    );
    }
}

export default Table;