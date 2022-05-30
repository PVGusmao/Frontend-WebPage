export const SET_PERSONS_INFO = 'SET_PERSONS_INFO';
export const SET_MODAL = 'SET_MODAL';

export const getPersonsInfo = (info) => ({ type: SET_PERSONS_INFO, info });
export const setModal = () => ({ type: SET_MODAL });
