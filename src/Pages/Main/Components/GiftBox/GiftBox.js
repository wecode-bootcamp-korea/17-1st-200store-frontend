import React, { Component } from 'react';
import './GiftBox.scss';

class GiftBox extends Component {
  render() {
    const { src, alt, bigText, smallText } = this.props;
    return (
      <div className="GiftBox">
        <img alt={alt} src={src} />
        <div className="giftTextContainer">
          <h3>{bigText}</h3>
          <h4>{smallText}</h4>
        </div>
      </div>
    );
  }
}

export default GiftBox;
