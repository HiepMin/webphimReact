import React from "react";

class MovieItem extends React.Component {

    render() {
        return (
            <tr>
                <td>1</td>
                <td>Minions</td>
                <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, esse?</td>
                <td>
                    <button className="btn btn-success">
                        Trailer
                </button>
                </td>
                <td className="d-flex ">
                    <button className="btn btn-secondary">Edit</button>
                    <button className="btn btn-danger">Del</button>
                </td>
            </tr>
        );
    }
}

export default MovieItem;
