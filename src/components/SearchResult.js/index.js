import React from 'react';

function SearchResult  (props) {
    return (
        <tbody>
            {props.results.map((result) => (
            <tr>
                <th scope="row">{result.picture.thumbnail}</th>
                <td>{result.name.first} {result.name.last}</td>
                <td>{result.phone}</td>
                <td>{result.email}</td>
                <td>{result.dob}</td>
            </tr>
            ))}
        </tbody>
    )
}


export default SearchResult;