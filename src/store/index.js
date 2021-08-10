import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import loader from './reducer/loader';
import auth from './reducer/auth';
import mapType from './reducer/mapType';

const reducers = combineReducers({
  loader,
  auth,
  mapType,
});

// , composeWithDevTools()
export default createStore(reducers);
