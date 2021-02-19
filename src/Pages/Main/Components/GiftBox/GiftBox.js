import React, { Component } from 'react';

import './GiftBox.scss';

class GiftBox extends Component {
  render() {
    return (
      <div className="GiftBox">
        <img alt={this.props.alt} src={this.props.src} />
        <div className="giftTextContainer">
          <h3>{this.props.h3Text}</h3>
          <h4>{this.props.h4Text}</h4>
        </div>
      </div>
    );
  }
}

export default GiftBox;
