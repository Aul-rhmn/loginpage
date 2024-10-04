import { createStore, applyMiddleware, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import authReducer from './reducers/authReducer';
import { thunk } from 'redux-thunk';

// Gabungkan reducers
const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer, // Gabungkan authReducer
});

// Buat store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
