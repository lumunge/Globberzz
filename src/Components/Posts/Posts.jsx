import React, {useState, useEffect} from 'react';
import { Grid, CircularProgress, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();


  const filterByCategory = (category) => {
    const newPosts = posts.filter((post) => post.category === category);
    setFilteredPosts(newPosts);
  }

  return (
    !posts.length ? <CircularProgress /> : (
      <>
      <div>
        {posts.map((post) => (
          <Button variant="contained" onClick={() => filterByCategory(post.category)}>{post.category}</Button>
        ))}
      </div>
      <br /><br />
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
      </>
    )
  );
};

export default Posts;
