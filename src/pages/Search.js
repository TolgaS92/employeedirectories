import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import SearchForm from '../components/SearchForm';
import Alert from "../components/Alert";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import Table from '../components/Table';


function Search() {
     
    const [ search, setSearch] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if(!search) {
            return;
        }

        API.getMultipleUsers(search)
        .then(res => {
            if(res.data.length === 0) {
                throw new Error("No result found!");
            }
            if(res.data.status === "error") {
                throw new Error(res.data.message);
            }
        })
        .catch(err => setError(err));
    }, [search]);
    
    const handleInputChange = event => {
        setSearch(event.target.value);
      };
    return (
        <div>
            <Navbar />
            <Wrapper>
            <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
                {error}
            </Alert>
            <SearchForm
                handleInputChange={handleInputChange}
                results={search}
            />
            <Table />
            </Wrapper>
        </div>
    );
}

export default Search;