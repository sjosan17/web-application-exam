import { GET_CARDS,
         ADD_CARD,
         UPDATE_CARD,
         DELETE_CARD } from '../actions/types';

export default function(state=[], action) {

  switch (action.type) {
    case GET_CARDS:
      return action.payload;

    case ADD_CARD:
      return [action.payload, ...state];

    case UPDATE_CARD:
      return state.map(content => {
        if(content.id === action.payload.id) {
          return action.payload;
        }
        return content;
      });

    case DELETE_CARD:
      return state.filter(content => content.id !== action.payload.id);

    default:
      return state;
  }

}
