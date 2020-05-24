import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import addCard from '../actions/add_card';
import clearToast from '../actions/clear_toast';
import AddModal from '../components/AddModal';
import Toast from '../components/Toast';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      newContentTitle: '',
      newContentDesc: '',
      newContentAuthor: '',
    }
    this.toggleModalState = this.toggleModalState.bind(this);
    this.handleNewContentTitleChange = this.handleNewContentTitleChange.bind(this);
    this.handleNewContentDescChange = this.handleNewContentDescChange.bind(this);
    this.handleNewContentAuthorChange = this.handleNewContentAuthorChange.bind(this);
    this.handleCardCreation = this.handleCardCreation.bind(this);
    this.handleClearToast = this.handleClearToast.bind(this);
  }
  toggleModalState() {
    if(this.state.showModal) {
      this.clearFormAndCloseModal();
    } else {
      this.setState({
        showModal: true
      })
    }
  }

  handleNewContentTitleChange(e) {
    this.setState({
      newContentTitle: e.target.value
    });
  }
  handleNewContentDescChange(e) {
    this.setState({
      newContentDesc: e.target.value
    });
  }
  handleNewContentAuthorChange(e) {
    this.setState({
      newContentAuthor: e.target.value
    });
  }
  clearFormAndCloseModal() {
    this.setState({
      newContentTitle: '',
      newContentDesc: '',
      newContentAuthor: '',
      showModal: false
    });
  }
  handleCardCreation() {
    const content = {
      title: this.state.newContentTitle,
      desc: this.state.newContentDesc,
      author: this.state.newContentAuthor
    };
    this.props.addCard(content);
    this.clearFormAndCloseModal();
  }
  handleClearToast() {
    this.props.clearToast();
  }
  render() {
    return (
      <div className="container pt-5">
        {this.props.toast
        ? <Toast
            dismiss={this.handleClearToast}
            message={this.props.toast} />
        : null}
        <div className={`container ${this.state.showModal ? 'modal-shown':''} pt-5`}>
          <div className="row justify-content-center">
            <div className="col-md-6">
                <h2>
                  Create a uTravel
                </h2>
                <button className="btn btn-primary btn-lg btn-block align-self-center"
                    onClick={this.toggleModalState}>Add</button>
            </div>
          </div>
        </div>
        <AddModal
          createCard={this.handleCardCreation}
          addCards={this.handleCardCreation}
          onTitleChange={this.handleNewContentTitleChange} 
          onDescChange={this.handleNewContentDescChange}
          onAuthorChange={this.handleNewContentAuthorChange}
          title={this.state.newContentTitle}
          desc={this.state.newContentDesc}
          author={this.state.newContentAuthor}
          open={this.state.showModal}
          close={this.toggleModalState}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        toast: state.toast
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addCard: addCard,
    clearToast: clearToast
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
