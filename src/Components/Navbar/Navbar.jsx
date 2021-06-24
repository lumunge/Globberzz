import React from "react";
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Button} from '@material-ui/core';
const Navbar = () => {
	return (
		<AppBar position="static" color="inherit">
			<Toolbar>
				<Button component={Link} to="/">Posts</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
