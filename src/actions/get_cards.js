import { GET_CARDS } from './types';
import axios from 'axios';

export default function getCards() {
  return dispatch => {
    axios.get('https://localhost:5001/api/content/')
      .then(res => {
        console.log('Content list ::', res.data);
        const contents = res.data.map(content => {
          content.CardBody = 'none';
          return content;
        });
        dispatch(getCardsAsync(contents));
      });
  }
}

function getCardsAsync(contents){
  return {
    type: GET_CARDS,
    payload: contents
  };
}