import React from "react";
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom';

import { deletePost } from "../../../Actions/Posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory();


	const openPost = () => history.push(`/posts/${post._id}`);

	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.media}
				image={
					post.image ||
					"default image"
				}
				title={post.title}
			/>
			<div className={classes.overlay}>
				<Typography variant="h6">{post.author}</Typography>
				<Typography variant="body2">
					{moment(post.createdAt).fromNow()}
				</Typography>
			</div>
			<div className={classes.overlay2}>
				<Button
					style={{ color: "white" }}
					size="small"
					onClick={() => setCurrentId(post._id)}
				>
					<MoreHorizIcon fontSize="default" />
				</Button>
			</div>
			<div className={classes.details}>
				<Typography
					variant="body2"
					color="textSecondary"
					component="h2"
				>
					{post.category}
				</Typography>
			</div>
			<Typography
				className={classes.title}
				gutterBottom
				variant="h5"
				component="h2"
			>
				{post.title}
			</Typography>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{post.body}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
			<Button
					size="small"
					color="primary"
					onClick={openPost}
				>
					Learn More
				</Button>
				<Button
					size="small"
					color="primary"
					onClick={() => dispatch(deletePost(post._id))}
				>
					<DeleteIcon fontSize="small" /> Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
