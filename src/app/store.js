import { applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware)

