const initialState = {
  mapType: 'MAP',
};

export default function mapType(state = initialState, action) {
  switch (action.type) {
    case 'MAP':
      return {
        ...state,
        mapType: 'MAP',
      };
    case 'BUILDING':
      return {
        ...state,
        mapType: 'BUILDING',
      };
    case 'PLAN':
      return {
        ...state,
        mapType: 'PLAN',
      };
    default:
      return state;
  }
}
