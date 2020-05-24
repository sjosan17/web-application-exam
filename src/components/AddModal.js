import React, { Component } from 'react';

class AddUserModal extends Component {
  render() {
    return (
      <div className={`modal ${this.props.open ? 'show' : ''}`}
        style={{
          display: `${this.props.open ? 'block' : 'none'}`,
        }}
        id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document"></div>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add new uTravel</h5>
            <button onClick={this.props.close} type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label className="col-form-label">Destination:</label>
                <input
                  value={this.props.title}
                  onChange={this.props.onTitleChange}
                  className="form-control"
                  type="text"
                  placeholder="Title" />
              </div>
              <div className="form-group">
                <label className="col-form-label">Desc:</label>
                <textarea className="form-control"
                  value={this.props.desc}
                  onChange={this.props.onDescChange}
                  placeholder="Travel 101">
                </textarea>
              </div>
              <div className="form-group">
                <label className="col-form-label">uTravel author:</label>
                <input
                  value={this.props.author}
                  onChange={this.props.onAuthorChange}
                  className="form-control"
                  type="text"
                  placeholder="name" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={this.props.close}>Close</button>
            <button type="button" className="btn btn-primary" onClick={this.props.createCard}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUserModal;