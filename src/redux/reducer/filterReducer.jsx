import { SET_RELEASE, SET_PUBLICATION, SET_EVENT } from "../action";

const INITIAL_STATE = {
  event: false,
  release: false,
  publication: false,
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_EVENT:
      return {
        ...state,
        event: !state.event,
      }
    case SET_RELEASE:
      return {
        ...state,
        release: !state.release,
      }
    case SET_PUBLICATION:
      return {
        ...state,
        publication: !state.publication,
      }
    default:
      return state;
  }
};

export default filterReducer;