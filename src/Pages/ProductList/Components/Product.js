import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    console.log(props.isBest);
  }
  render() {
    const {
      key,
      price,
      name,
      imgSrc,
      isBest,
      isNew,
      isSale,
      howMuchSale,
      stock,
    } = this.props;
    console.log(stock);
    return (
      <div className="Best">
        <div
          className={stock === 0 ? 'soldOut' : 'bestImage'}
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
        >
          {stock !== 0 && (
            <>
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
            </>
          )}
          {stock === 0 && <span className="soldOutText">SOLD OUT</span>}
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

export default Product;
