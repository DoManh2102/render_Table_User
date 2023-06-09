import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'
import { UserReducer } from './reducer/UserReducer';


const rootReducer = combineReducers({
    // state ứng dụng
    UserReducer,

})

export const store = createStore(rootReducer, applyMiddleware(thunk))