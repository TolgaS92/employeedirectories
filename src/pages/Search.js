import React, { Component } from 'react';
import API from '../utils/API';
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar';
import Table from '../components/Table';

class Search extends Component {
    state = {
        search: "",
        results: [],
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
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };
      handleFormSubmit = (event) => {
        // e.preventDefault()
        event.preventDefault();
        this.searchEmployees(this.state.search);
      };
    render(){
    return (
        <div>
            <Navbar />
            <SearchForm 
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            />
            <Table results={this.state.results}/>
        </div>
    );
}
}

export default Search;