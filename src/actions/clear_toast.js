import { CLEAR_TOAST } from './types';
// Bugged
export default function clearToast() {
  return dispatch => {
    dispatch(clearToastAsync());
  }
}

function clearToastAsync(){
  return {
    type: CLEAR_TOAST,
    payload: null
  };
}
