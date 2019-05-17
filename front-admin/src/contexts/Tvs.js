import _ from 'lodash';
import axios from 'axios';

export const ADD_TV = 'ADD_TV';
export const REMOVE_TV = 'REMOVE_TV';
export const EDIT_TV = 'EDIT_TV';
export const FETCH_TVS = 'FETCH_TVS';
export const FETCH_TVS_SUCCESS = 'FETCH_TVS_SUCCESS';

export const addTv = (state, dispatch, name, compositionId, callback) => {
  axios.put('http://localhost:8080/Tv', { name, compositionId })
    .then(() => {
      if (callback) callback(true);
      dispatch({ type: FETCH_TVS, dispatch });
    })
    .catch((error) => {
      if (callback) callback(false);
      console.error(error);
    });
  return state;
};

export const removeTv = (state, dispatch, id, callback) => {
  axios.delete(`http://localhost:8080/Tv/${id}`)
    .then(() => {
      if (callback) callback(true);
      dispatch({ type: FETCH_TVS, dispatch });
    })
    .catch((error) => {
      if (callback) callback(false);
      console.error(error);
    });
  return state;
};

export const editTv = (state, dispatch, id, name, compositionId, callback) => {
  console.log('edit', id, name, compositionId);
  axios.post('http://localhost:8080/Tv', { id, name, compositionId })
    .then(() => {
      if (callback) callback(true);
      dispatch({ type: FETCH_TVS, dispatch });
    })
    .catch((error) => {
      if (callback) callback(false);
      console.error(error);
    });
  return state;
};

export const fetchTvs = (state, dispatch) => {
  axios.get('http://localhost:8080/Tv/all')
    .then((response) => {
      dispatch({ type: FETCH_TVS_SUCCESS, tvs: response.data });
    })
    .catch((error) => {
      console.error(error);
    });
  return state;
};

export const fetchTvsSuccess = (state, tvs) => ({
  ..._.clone(state),
  tvs,
});
