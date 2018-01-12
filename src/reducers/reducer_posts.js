import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action){
  switch(action.type){
  case DELETE_POST:
    return _.omit(state, action.payload);
    //return _.reject(state, post => post === action.payload);
  case FETCH_POST:
    //const post = action.payload.data;
    //const newState { ...state };
    //return newState[post.id] = post;

    return { ...state, [action.payload.data.id] : action.payload.data };
  case FETCH_POSTS:
    console.log(action.payload.data);
    return _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }
}
