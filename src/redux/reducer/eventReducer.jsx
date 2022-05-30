import { SET_PERSONS_INFO, SET_MODAL } from "../action";

const INITIAL_STATE = {
  detailsPerson: [],
  showModal: false,
  remove: false,
};

const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PERSONS_INFO:
      return {
        ...state,
        detailsPerson: action.info,
        showModal: !state.showModal,
      }
    case SET_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      }
    default:
      return state;
  }
};

export default eventReducer;