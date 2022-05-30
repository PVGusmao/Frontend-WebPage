import { SET_PERSONS_INFO } from "../action";

const INITIAL_STATE = {
  detailsPerson: [],
  showModal: false,
};

const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PERSONS_INFO:
      return {
        ...state,
        detailsPerson: action.info,
        showModal: true,
      }
    default:
      return state;
  }
};

export default eventReducer;