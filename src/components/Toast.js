import React from 'react';
// Bugged
const Toast = (props) => {
  return (
    <div className="toast">
      <button
        onClick={props.dismiss}
        className="btn btn-warning float-right" aria-label="Close"></button>
      <div className="toast-body">
        {props.message}
      </div>
    </div>
  );
}

export default Toast;
