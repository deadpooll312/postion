import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import loader from './reducer/loader';
import auth from './reducer/auth';
import mapType from './reducer/mapType';
import ows from "./reducer/ows";

const reducers = combineReducers({
  loader,
  auth,
  mapType,
  ows
});

// , composeWithDevTools()
export default createStore(reducers);
