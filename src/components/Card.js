import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import updateCard from '../actions/update_card';
import deleteCard from '../actions/delete_card';
import { CardBody } from './CardBody';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editDesc: false,
      desc: props.content.desc
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleUpdateCard = this.handleUpdateCard.bind(this);
    this.handleDeleteCard = this.handleDeleteCard.bind(this);
  }
  toggleEdit() {
    this.setState({
      editDesc: !this.state.editDesc
    })
  }
  handleDescChange(e) {
    this.setState({
      desc: e.target.value
    });
  }
  handleUpdateCard() {
    const update = {
      id: this.props.content.id,
      title: this.props.content.title,
      desc: this.props.content.desc,
      author: this.state.author
    }
    this.props.updateCard(update);
    this.toggleEdit();
  }
  handleDeleteCard() {
    this.props.deleteCard(this.props.content);
  }
  render() {
    const content = this.props.content;
    return (
      <div className="card border-light mb-3">
        <div className="card-header">
        <button
          className="btn btn-danger float-right" 
          data-toggle="tooltip" data-placement="top" title="Tooltip on top"
          onClick={this.handleDeleteCard}>Delete</button>
          <h4 className="card-title">{content.title}</h4>
        </div>
        <CardBody
          toggleEdit={this.toggleEdit}
          updateCard={this.handleUpdateCard}
          edit={this.state.editDesc}
          handleDescChange={this.handleDescChange}
          content={this.state.desc} />
          <div className="card-footer text-muted">
            <span>Author:</span> {content.author}
          </div>
      </div>
    );
  }
}

//connects redux actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateCard: updateCard,
    deleteCard: deleteCard
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Card);
