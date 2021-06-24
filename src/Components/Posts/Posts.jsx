import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import { Grid, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
	const posts = useSelector((state) => state.posts);
	const [filteredPosts, setFilteredPosts] = useState([]);
	const classes = useStyles();
	const history = useHistory();

	if (!posts.length) return 'Getting posts...';
	const allCategories = ["all", ...new Set(posts.map((post) => post.category)),];


	const filterByCategory = (category) => {
		if (category === "all") {
			setFilteredPosts(posts);
			return;
		}
		const newPosts = posts.filter((post) => post.category === category);
		setFilteredPosts(newPosts);
	};

	if (!posts.length) return 'Getting posts...';

	return (
		<>
			<div>
				{allCategories.map((category) => (
					<Button
						variant="contained"
						onClick={() => filterByCategory(category)}
					>
						{category}
					</Button>
				))}
			</div>
			<br />
			<br />
			<Grid
				className={classes.container}
				container
				alignItems="stretch"
				spacing={3}
			>
				{filteredPosts?.map((post) => (
					<Grid key={post._id} item xs={12} sm={6} md={6}>
						<Post post={post} setCurrentId={setCurrentId} />
					</Grid>
				))}
			</Grid>
		</>
  )
};

export default Posts;
