import _ from 'lodash';
import axios from 'axios';

export const ADD_COMPOSITION = 'ADD_COMPOSITION';
export const EDIT_COMPOSITION = 'EDIT_COMPOSITION';
export const REMOVE_COMPOSITION = 'REMOVE_COMPOSITION';
export const FETCH_COMPOSITIONS = 'FETCH_COMPOSITION';
export const FETCH_COMPOSITIONS_SUCCESS = 'FETCH_COMPOSITION_SUCCESS';

export const addComposition = (state, dispatch, name, callback) => {
  axios.put('http://localhost:8090/Compositions', { name })
    .then(() => {
      if (callback) callback(true);
      dispatch({ type: FETCH_COMPOSITIONS, dispatch });
    })
    .catch((error) => {
      if (callback) callback(false);
      console.error(error);
    });
  return state;
};

export const removeComposition = (state, dispatch, id, callback) => {
  axios.delete(`http://localhost:8090/Compositions/${id}`)
    .then(() => {
      if (callback) callback(true);
      dispatch({ type: FETCH_COMPOSITIONS, dispatch });
    })
    .catch((error) => {
      if (callback) callback(false);
      console.error(error);
    });
  return state;
};

export const editComposition = (state, dispatch, id, name, moduleTree, callback) => {
  axios.post('http://localhost:8090/Compositions', { id, name, moduleTree })
    .then(() => {
      if (callback) callback(true);
      dispatch({ type: FETCH_COMPOSITIONS, dispatch });
    })
    .catch((error) => {
      if (callback) callback(false);
      console.error(error);
    });
  return state;
};

export const fetchCompositions = (state, dispatch) => {
  axios.get('http://localhost:8090/Compositions/all')
    .then((response) => {
      dispatch({ type: FETCH_COMPOSITIONS_SUCCESS, compositions: response.data });
    })
    .catch((error) => {
      console.error(error);
    });
  return state;
};

export const fetchCompositionsSuccess = (state, compositions) => ({
  ..._.clone(state),
  compositions,
});
