import { SET_OWS_DATA, SET_OWS_ERROR, SET_OWS_FETCHING } from '../actions/ows';

const reqData = { fetching: false, data: null, error: null };

const initialState = {
  owsData: reqData,
};

export default function ows(state = initialState, { type, payload }) {
  switch (type) {
    case SET_OWS_FETCHING:
      return {
        ...state,
        owsData: { ...state.owsData, fetching: payload },
      };
    case SET_OWS_DATA:
      return {
        ...state,
        owsData: { ...state.owsData, data: payload },
      };
    case SET_OWS_ERROR:
      return {
        ...state,
        owsData: { ...state.owsData, error: payload },
      };
    default:
      return state;
  }
}
