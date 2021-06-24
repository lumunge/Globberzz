import React from "react";
import {
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Avatar,
	IconButton,
	Typography,
	Button,
} from "@material-ui/core/";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deletePost } from "../../../Actions/Posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory();

	const openPost = () => history.push(`/posts/${post._id}`);

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar>{post.author.charAt(0)}</Avatar>
				}
				action={
					<IconButton onClick={() => setCurrentId(post._id)}>
						<MoreVertIcon />
					</IconButton>
				}
				title={post.title}
				subheader={moment(post.createdAt).fromNow()}
			/>
			<CardMedia
				className={classes.image}
				image={post.image || "default image"}
				title={post.title}
			/>
			<CardContent>
				<Typography variant="caption">#{post.category}</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{post.body.slice(0, 100).concat("...")}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button size="small" color="primary" onClick={openPost}>
					Read
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
