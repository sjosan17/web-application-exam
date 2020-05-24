import { combineReducers } from 'redux';
import CardsReducer from './reducer_card_list';
import ToastReducer from './reducer_toast';

const rootReducer = combineReducers({
  cards: CardsReducer,
  toast: ToastReducer
});

export default rootReducer;
