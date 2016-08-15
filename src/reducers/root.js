// @flow

import actionTypes from '../constants/actionTypes';

const root = (state: Object = {}, action: Object): Object => {
  switch (action.type) {
    case actionTypes.LOADING:
      return Object.assign({}, state, { loadingStatus: actionTypes.LOADING });
    case actionTypes.LOADED:
      return Object.assign({}, state, { loadingStatus: actionTypes.LOADED });
    default:
      return state;
  }
};

export default root;
