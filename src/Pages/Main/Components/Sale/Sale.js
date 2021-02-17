import React, { Component } from 'react';
import './Sale.scss';

class Sale extends Component {
  finalPrice = (
    Math.round(
      (this.props.price * (100 - this.props.howMuchSale) * 0.01) / 1000
    ) * 1000
  ).toLocaleString();
  render() {
    return (
      <div className="New">
        <div
          className="newImage"
          style={{
            backgroundImage: `url(${this.props.imgSrc})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
        >
          <div className="labelContainer">
            {this.props.isBest && <span className="isBest"> BEST </span>}
            {this.props.isNew && <span className="isNew"> NEW </span>}
            {this.props.isSale && <span className="isSale"> SALE </span>}
          </div>
        </div>
        {this.props.howMuchSale > 0 && (
          <span className="howMuchSale"> {this.props.howMuchSale}%</span>
        )}
        <p>{this.props.name}</p>
        {this.props.howMuchSale === 0 && (
          <p className="price">{this.props.price.toLocaleString()}원</p>
        )}
        {this.props.howMuchSale > 0 && (
          <div className="priceContainer">
            <p className="oldPrice"> {this.props.price.toLocaleString()}원 </p>
            <p className="salePrice">{this.finalPrice}원</p>
          </div>
        )}
      </div>
    );
  }
}

export default Sale;
