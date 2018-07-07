import React, { Component } from 'react';
import Navbar from "./Navbar/Navbar.jsx";
import TableMovieList from "./MovieList/TableMovieList.jsx";

class Admin extends Component {
	render() { 
		return (
			<div className="AdminPage">
				<Navbar />
				<div className="container">
					<div className="row">
						<div className="col-8 mx-auto">
							<TableMovieList />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Admin;
