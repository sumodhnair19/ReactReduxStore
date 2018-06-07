import {
  POST_FORM,
  HIDE_LOADER
} from './actionType';

export const formPost = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => {

        dispatch({
          type: HIDE_LOADER,
          payload: post
        })

        dispatch({
          type: POST_FORM,
          payload: post
        })

      }

    );
};
