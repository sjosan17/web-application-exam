import React from 'react';

export const CardBody = (props) => {
  return (
    <div>
      <div className="card-body">
        {props.edit
          ? <textarea
              onChange={props.handleDescChange}
              className="form-input d-block"
              value={props.content}
              rows="5" />
          : <p>{props.content}</p>}
      </div>
      <div className="card-body float-right">
        {props.edit
          ? <SaveButton updateCard={props.updateCard} />
          : <EditButton toggleEdit={props.toggleEdit} />}
      </div>
    </div>
  );
}

const EditButton = (props) => {
  return (
    <button
      onClick={props.toggleEdit}
      className="btn btn-link">
      Edit
    </button>
  );
}

const SaveButton = (props) => {
  return (
    <button
      onClick={props.updateCard}
      className="btn btn-success">
      Save
    </button>
  );
}