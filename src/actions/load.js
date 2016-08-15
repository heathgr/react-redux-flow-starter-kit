// @flow
import type { Dispatcher, Thunk } from '../types/redux';

import actionTypes from '../constants/actionTypes';

const load = (): Thunk => (dispatch: Dispatcher) => {
  dispatch({
    type: actionTypes.LOADING,
  });
  setTimeout(
    (): void => dispatch({
      type: actionTypes.LOADED,
    }),
    3000
  );
};

export default load;
