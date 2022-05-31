//eventReducer --

export const SET_PERSONS_INFO = 'SET_PERSONS_INFO';
export const SET_MODAL = 'SET_MODAL';

export const getPersonsInfo = (info) => ({ type: SET_PERSONS_INFO, info });
export const setModal = () => ({ type: SET_MODAL });

//filterReducer --

export const SET_RELEASE = 'SET_RELEASE';
export const SET_PUBLICATION = 'SET_PUBLICATION';
export const SET_EVENT = 'SET_EVENT';

export const setRelease = () => ({ type: SET_RELEASE });
export const setEvent = () => ({ type: SET_EVENT });
export const setPublication = () => ({ type: SET_PUBLICATION });

