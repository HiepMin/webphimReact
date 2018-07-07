import React  from "react";
import MovieItem from "./../MovieItem/MovieItem.jsx";


class TableMovieList extends React.Component {

    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Mô Tả</th>
                        <th>Trailer</th>
                        <th>Thao Tác</th>
                    </tr>
                </thead>

                <tbody>
                   <MovieItem />
                   <MovieItem />
                   <MovieItem />
                </tbody>
            </table>
        );
    }
}
export default TableMovieList;