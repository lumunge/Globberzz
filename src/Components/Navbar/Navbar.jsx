import React from "react";
import {AppBar, Typography} from '@material-ui/core';
const Navbar = () => {
	return (
		<AppBar position="static" color="inherit">
			<Typography variant="h2" align="center">
				Bloggerzz
			</Typography>
		</AppBar>
	);
};

export default Navbar;
