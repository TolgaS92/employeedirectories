import React from 'react';

function Table(props) {
    return (
        <div className="container mt-3">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DoB</th>
                    </tr>
                </thead>
                <tbody>
                {props.results.map((result) => (
                <tr>
                    <th scope="row"><img src={result.picture.thumbnail} alt={result.name.first}/></th>
                    <td>{result.name.first} {result.name.last}</td>
                    <td>{result.phone}</td>
                    <td>{result.email}</td>
                    <td>{result.dob.date}</td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;