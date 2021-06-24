import React, {useEffect} from 'react';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {getPost} from '../../../Actions/Posts';
import {Typography, Paper} from '@material-ui/core';


const PostDetails = () => {

    const {post} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    if (!post) return null;

    console.log(post);



    return(
        <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div >
        <div >
          <Typography variant="h3" component="h2">{post.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
          <Typography variant="h6">Created by: {post.author}</Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div>
          <img  src={post.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div>
      </div>
    </Paper>
    )
}

export default PostDetails;