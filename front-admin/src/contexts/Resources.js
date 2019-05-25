import _ from 'lodash';
import axios from 'axios';

export const ADD_RESOURCE = 'ADD_RESOURCE';
export const FETCH_RESOURCES = 'FETCH_RESOURCES';
export const FETCH_RESOURCES_SUCCESS = 'FETCH_RESOURCES_SUCCESS';

export const addResource = (state, dispatch, file, callback) => {
  const data = new FormData();
  data.append('file', file);
  axios.post('https://localhost:5001/api/ScreenFiles/upload', data)
    .then(() => {
      callback(true);
      dispatch({ type: FETCH_RESOURCES, dispatch });
    })
    .catch((error) => {
      callback(false);
      console.error(error);
    });
  return state;
};

export const fetchResources = (state, dispatch) => {
  axios.get('https://localhost:5001/api/ScreenFiles/getResource')
    .then((response) => {
      const resources = _.map(response.data.resources, resource => ({
        name: resource,
        type: _.includes(['mp4', 'mp3'], resource.split('.')[1]) ? 'video' : 'picture',
        url: `https://localhost:5001/api/ScreenFiles/getFile/${resource}`,
      }));
      dispatch({ type: FETCH_RESOURCES_SUCCESS, resources });
    })
    .catch((error) => {
      console.error(error);
    });
  return state;
};

export const fetchResourcesSuccess = (state, resources) => ({
  ..._.clone(state),
  resources,
});
