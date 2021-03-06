import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../../Actions/Posts";
import { Typography, Container } from "@material-ui/core";
import useStyles from './styles';

const PostDetails = () => {
	const { post } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	const { id } = useParams();
	

	const classes = useStyles();

	dispatch(getPost(id));

	if (!post) return <h4>Getting post...</h4>;

	return (
		<>
		<br /><br />
		<Container className={classes.post}>
			<div>
				<img
					src={
						post.image ||
						"default image"
					}
					alt={post.title}
				/>
			</div>
				<div className={classes.postDetails}>
					<Typography variant="h3" component="h2">
						{post.title}
					</Typography>
					<Typography
						variant="h6"
					>
					Category: 	{post.category}
					</Typography>
					<Typography variant="caption">
						Author: {post.author}  {moment(post.createdAt).fromNow()}
					</Typography>
					
					<Typography gutterBottom variant="body1" component="p">
						{post.body}
					</Typography>
					<Typography variant="body1">
						{moment(post.createdAt).fromNow()}
					</Typography>
				</div>
		</Container>
		</>
	);
};

export default PostDetails;
