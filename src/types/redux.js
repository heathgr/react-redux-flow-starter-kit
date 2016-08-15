// @flow

export type Action = { type: String };
export type Dispatcher = (action: Action) => void;
export type Thunk = (dispatch: Dispatcher, getState?: () => Object) => void;
