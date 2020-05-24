import { ADD_CARD } from './types';
import newToast from './new_toast';
import axios from 'axios';

export default function addCard(content) {
  const message = `Added ${content.title} to news list.`;
  return dispatch => {
    axios.post('https://localhost:5001/api/content/', content)
      .then(res => console.log(res.data));
    dispatch(addCardAsync(content));
    dispatch(newToast(message))
  }
}

function addCardAsync(content){
  return {
    type: ADD_CARD,
    payload: content
  };
}