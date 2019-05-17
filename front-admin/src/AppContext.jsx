/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

import React, {
  createContext, useContext, useReducer,
} from 'react';

import _ from 'lodash';

import * as compositions from './contexts/Compositions';
import * as tvs from './contexts/Tvs';
import * as resources from './contexts/Resources';

export const initialContext = {
  resources: [],
  compositions: [],
  tvs: [],
  editMode: false,
  toggleEditMode: () => {},

  addComposition: (name, callback) => {},
  removeComposition: (id, callback) => {},
  editComposition: (id, name, moduleTree) => {},
  fetchCompositions: () => {},

  addTv: (name, compositionId, callback) => {},
  removeTv: (id, callback) => {},
  editTv: (id, name, compositionId, callback) => {},
  fetchTvs: () => {},

  addResource: (file, callback) => {},
  fetchResources: () => {},
};

const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';

const toggleEditMode = (state) => {
  const newState = _.clone(state);
  newState.editMode = !newState.editMode;
  return newState;
};

const addComposition = (state, name) => {
  const newState = _.clone(state);
  newState.compositions.push({ id: 0, name });
  return newState;
};

const removeCompositions = (state, ids) => {
  const newState = _.clone(state);
  newState.compositions = _.filter(newState.compositions, ({ id }) => !_.includes(ids, id));
  return newState;
};

export const AppContext = createContext(initialContext);

export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_EDIT_MODE:
      return toggleEditMode(state);

    case compositions.ADD_COMPOSITION:
      return compositions.addComposition(state, action.dispatch, action.name, action.callback);
    case compositions.REMOVE_COMPOSITION:
      return compositions.removeComposition(state, action.dispatch, action.id);
    case compositions.EDIT_COMPOSITION:
      return compositions.editComposition(state, action.dispatch, action.id, action.name, action.moduleTree, action.callback);
    case compositions.FETCH_COMPOSITIONS:
      return compositions.fetchCompositions(state, action.dispatch);
    case compositions.FETCH_COMPOSITIONS_SUCCESS:
      return compositions.fetchCompositionsSuccess(state, action.compositions);

    case tvs.ADD_TV:
      return tvs.addTv(state, action.dispatch, action.name, action.compositionId, action.callback);
    case tvs.REMOVE_TV:
      return tvs.removeTv(state, action.dispatch, action.id, action.callback);
    case tvs.EDIT_TV:
      return tvs.editTv(state, action.dispatch, action.id, action.name, action.compositionId, action.callback);
    case tvs.FETCH_TVS:
      return tvs.fetchTvs(state, action.dispatch);
    case tvs.FETCH_TVS_SUCCESS:
      return tvs.fetchTvsSuccess(state, action.tvs);

    case resources.ADD_RESOURCE:
      return resources.addResource(state, action.dispatch, action.file, action.callback);
    case resources.FETCH_RESOURCES:
      return resources.fetchResources(state, action.dispatch);
    case resources.FETCH_RESOURCES_SUCCESS:
      return resources.fetchResourcesSuccess(state, action.resources);

    default: return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialContext);

  const contextValue = {
    ...state,
    toggleEditMode: () => dispatch({ type: TOGGLE_EDIT_MODE }),

    addComposition: (name, callback) => dispatch({
      type: compositions.ADD_COMPOSITION, dispatch, name, callback,
    }),
    removeComposition: (id, callback) => dispatch({
      type: compositions.REMOVE_COMPOSITION, dispatch, id, callback,
    }),
    editComposition: (id, name, moduleTree, callback) => dispatch({
      type: compositions.EDIT_COMPOSITION, dispatch, id, name, moduleTree, callback,
    }),
    fetchCompositions: () => dispatch({ type: compositions.FETCH_COMPOSITIONS, dispatch }),

    addTv: (name, compositionId, callback) => dispatch({
      type: tvs.ADD_TV, dispatch, name, compositionId, callback,
    }),
    removeTv: (id, callback) => dispatch({
      type: tvs.REMOVE_TV, dispatch, id, callback,
    }),
    editTv: (id, name, compositionId, callback) => dispatch({
      type: tvs.EDIT_TV, dispatch, id, name, compositionId, callback,
    }),
    fetchTvs: () => dispatch({ type: tvs.FETCH_TVS, dispatch }),

    addResource: (file, callback) => dispatch({
      type: resources.ADD_RESOURCE, dispatch, file, callback,
    }),
    fetchResources: () => dispatch({ type: resources.FETCH_RESOURCES, dispatch }),
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
