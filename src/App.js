import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import { getPosts } from "./Actions/Posts";
import useStyles from "./styles";
import PostDetails from "./Components/Posts/PostDetails/PostDetails";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/posts/:id" component={PostDetails} />
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default App;
