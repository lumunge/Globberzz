import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostDetails from "./Components/Posts/PostDetails/PostDetails";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/posts/:id" component={PostDetails} />
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;
