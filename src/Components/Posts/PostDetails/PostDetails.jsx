import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getPost } from "../../../Actions/Posts";
import { Typography, Container } from "@material-ui/core";

const PostDetails = () => {
	const { post } = useSelector((state) => state.posts);
	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getPost(id));
	}, [id]);

	if (!post) return null;

	console.log(post);

	return (
		<Container>
			<div>
				<img
					src={
						post.image ||
						"default image"
					}
					alt={post.title}
				/>
			</div>
				<div>
					<Typography variant="h3" component="h2">
						{post.title}
					</Typography>
					<Typography
						gutterBottom
						variant="h6"
						color="textSecondary"
						component="h2"
					>
						{post.category}
					</Typography>
					<Typography gutterBottom variant="body1" component="p">
						{post.message}
					</Typography>
					<Typography variant="h6">
						Created by: {post.author}
					</Typography>
					<Typography variant="body1">
						{moment(post.createdAt).fromNow()}
					</Typography>
				</div>
		</Container>
	);
};

export default PostDetails;
