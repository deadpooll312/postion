export const SET_OWS_DATA = 'SET_OWS_DATA';
export const SET_OWS_FETCHING = 'SET_OWS_FETCHING';
export const SET_OWS_ERROR = 'SET_OWS_ERROR';

export const setOwsLoading = (payload) => ({ type: SET_OWS_FETCHING, payload });
export const setOwsData = (payload) => ({ type: SET_OWS_DATA, payload });
export const setOwsError = (payload) => ({ type: SET_OWS_ERROR, payload });
