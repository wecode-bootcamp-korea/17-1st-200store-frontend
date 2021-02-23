import React, { Component } from 'react';
import './Product.scss';

class Product extends Component {
  render() {
    // const saleNumToInt = Math.ceil(this.props.sale);
    // const saleNumber = this.props.sale * 100;
    // const originalPrice = Math.ceil(
    //   this.props.price - this.finalPrice
    // ).toLocaleString();
    const finalPrice = Math.round(
      (this.props.price * (1 - this.props.sale)) / 100
    ).toLocaleString();

    const {
      key,
      price,
      name,
      imgSrc,
      isBest,
      isNew,
      isSale,
      sale,
      stock,
    } = this.props;

    // console.log('세일', this.props.sale);
    // console.log('세일', finalPrice);
    console.log('확인', this.originalPrice);

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

        {sale > 0 && <span className="sale"> {sale}%</span>}
        <p>{name}</p>
        {sale === 0 && <p className="price">{price.toLocaleString()}원</p>}
        {sale > 0 && (
          <div className="priceContainer">
            <p className="oldPrice"> {price.toLocaleString()}원 </p>
            <p className="salePrice">{finalPrice}원</p>
          </div>
        )}
      </div>
    );
  }
}

export default Product;
