import React, { Component } from 'react';
import '../mainComp.scss';

class Best extends Component {
  finalPrice = (
    Math.round(
      (this.props.price * (100 - this.props.howMuchSale) * 0.01) / 1000
    ) * 1000
  ).toLocaleString();

  render() {
    const {
      name,
      imgSrc,
      isBest,
      isNew,
      isSale,
      howMuchSale,
      price,
    } = this.props;
    return (
      <div className="Best">
        <div
          className="bestImage"
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
        >
          <div className="labelContainer">
            {isBest && <span className="isBest"> BEST </span>}
            {isNew && <span className="isNew"> NEW </span>}
            {isSale && <span className="isSale"> SALE </span>}
          </div>
          <div className="hoverContainer">
            <div className="hoverHeart">
              <i class="far fa-heart" />
            </div>
            <div className="hoverCart">
              <i class="fas fa-shopping-cart" />
            </div>
          </div>
        </div>
        {howMuchSale > 0 && (
          <span className="howMuchSale"> {howMuchSale}%</span>
        )}
        <p>{name}</p>
        {howMuchSale === 0 && (
          <p className="price">{price.toLocaleString()}원</p>
        )}
        {this.props.howMuchSale > 0 && (
          <div className="priceContainer">
            <p className="oldPrice"> {price.toLocaleString()}원 </p>
            <p className="salePrice">{this.finalPrice}원</p>
          </div>
        )}
      </div>
    );
  }
}

export default Best;
