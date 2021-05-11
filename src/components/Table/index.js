import React, {Component} from 'react';
import Databody from '../Databody';
class Table extends Component {
render()    {
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
                <Databody />
            </table>
        </div>
    )
}
}

export default Table;