import { UPDATE_CARD } from './types';
import axios from 'axios';

export default function updateCard(content) {
  return dispatch => {
    axios.put(`https://localhost:5001/api/content/${content.id}`, content)
      .then(res => console.log(res.data));
    dispatch(updateCardAsync(content));
  }
}

function updateCardAsync(content){
  return {
    type: UPDATE_CARD,
    payload: content
  };
}