import React, { Component } from 'react';
import Admin from "./Components/Admin/Admin.jsx";
import RouterConfig from "./Router/Router.jsx";
import { Switch, BrowserRouter, Route } from "react-router-dom";

class App extends Component {
	

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					{this.RouterOutlet(RouterConfig)}
				</div> 
			</BrowserRouter>

		);
	}

	RouterOutlet = (routes) => {
		let res = null;
		if (routes.length > 0) {
			res = routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
					/>
				);
			})
		}
		return <Switch>{ res }</Switch>
	}
}

export default App;
