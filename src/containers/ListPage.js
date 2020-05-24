import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getCards from '../actions/get_cards';
import clearToast from '../actions/clear_toast';
import Card from '../components/Card';
import Toast from '../components/Toast';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClearToast = this.handleClearToast.bind(this);
  }
  componentDidMount() {
    this.props.getCards();
  }
  renderCards() {
    if(this.props.cards) {
      return this.props.cards.map(content => {
        return <Card key={content.id} content={content} />;
      });
    }
  }

  handleClearToast() {
    this.props.clearToast();
  }

  render() {
    return (
      <div className="container">
        {this.props.toast
        ? <Toast
            dismiss={this.handleClearToast}
            message={this.props.toast} />
        : null}
        <div className="container mt-5 pt-5">
          <div className="row justify-content-center">
            <div className="col-6">
                <h2>
                  Destinations by uTravel users:
                </h2>

              {this.renderCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cards: state.cards,
    toast: state.toast
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCards: getCards,
    clearToast: clearToast
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
