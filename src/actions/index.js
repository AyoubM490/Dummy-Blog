import axios from 'axios';
import types from './types';

const fetchPosts = () => async (dispatch) => {
  await axios
    .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then((res) => {
      dispatch({
        type: types.GET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      // console.log(err);
    });
};

export default fetchPosts;
