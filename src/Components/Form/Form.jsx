import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createPost, updatePost } from "../../Actions/Posts";

const Form = ({ currentId, setCurrentId }) => {
	const [postData, setPostData] = useState({
		author: "",
		title: "",
		body: "",
		category: "",
		image: "",
	});
	const post = useSelector((state) =>
		currentId
			? state.posts.find((body) => body._id === currentId)
			: null
	);
	const dispatch = useDispatch();
	const classes = useStyles();

	useEffect(() => {
		if (post) setPostData(post);
	}, [post]);

	const clear = () => {
		setCurrentId(0);
		setPostData({
			author: "",
			title: "",
			body: "",
			category: "",
			image: "",
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (currentId === 0) {
			dispatch(createPost(postData));
			clear();
		} else {
			dispatch(updatePost(currentId, postData));
			clear();
		}
	};

	return (
		<Paper className={classes.paper}>
			<form
				autoComplete="off"
				noValidate
				className={`${classes.root} ${classes.form}`}
				onSubmit={handleSubmit}
			>
				<Typography variant="h6">
					{currentId
						? `Edit "${post.title}"`
						: "Create new Post"}
				</Typography>
				<TextField
					name="author"
					variant="outlined"
					label="Author"
					fullWidth
					value={postData.author}
					onChange={(e) =>
						setPostData({ ...postData, author: e.target.value })
					}
				/>
				<TextField
					name="title"
					variant="outlined"
					label="Title"
					fullWidth
					value={postData.title}
					onChange={(e) =>
						setPostData({ ...postData, title: e.target.value })
					}
				/>
				<TextField
					name="body"
					variant="outlined"
					label="Body"
					fullWidth
					multiline
					rows={4}
					value={postData.body}
					onChange={(e) =>
						setPostData({ ...postData, body: e.target.value })
					}
				/>
				<TextField
					name="category"
					variant="outlined"
					label="Category"
					fullWidth
					value={postData.category}
					onChange={(e) =>
						setPostData({ ...postData, category: e.target.value })
					}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setPostData({ ...postData, image: base64 })
						}
					/>
				</div>
				<>
				<Button
					variant="contained"
					size="large"
					type="submit"
					color="primary"
				>
					Create
				</Button>
				&nbsp;
				<Button
					variant="contained"
					size="small"
					color="secondary"
					onClick={clear}
				>
					Reset
				</Button>
				</>
			</form>
		</Paper>
	);
};

export default Form;
