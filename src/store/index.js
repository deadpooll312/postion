import { combineReducers, createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import loader from './reducer/loader';
import auth from './reducer/auth';

const reducers = combineReducers({
  loader,
  auth,
});

// , composeWithDevTools()
export default createStore(reducers);
