import { DELETE_CARD } from './types';
import newToast from './new_toast';
import axios from 'axios';

export default function deleteCard(content) {
  const message = `You have just deleted ${content.title}.`;
  return dispatch => {
    axios.delete(`https://localhost:5001/api/content/${content.id}`)
      .then(res => console.log(res.data));

    dispatch(deleteCardAsync(content));
    dispatch(newToast(message))
  }
}

function deleteCardAsync(content) {
  return {
    type: DELETE_CARD,
    payload: content
  };
}