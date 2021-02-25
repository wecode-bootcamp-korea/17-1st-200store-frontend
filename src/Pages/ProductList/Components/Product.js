import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Product.scss';

class Product extends Component {
  goToDetail = id => {
    this.props.history.push(`/productdetail/${id}`);
  };
  render() {
    const saleNumToInt = Math.ceil(this.props.sale);
    const saleNumber = this.props.sale * 100;
    const originalPrice = Math.ceil(this.props.price).toLocaleString();
    const finalPrice = (
      Math.round((this.props.price * (1 - this.props.sale)) / 100) * 100
    ).toLocaleString();
    const {
      key,
      name,
      imgSrc,
      isBest,
      isNew,
      isSale,
      sale,
      stock,
    } = this.props;
    console.log('origin price', originalPrice);
    console.log('sale', sale);

    return (
      <div className="Best">
        <div
          onClick={() => this.goToDetail(this.props.id)}
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

        {sale > 0 && <span className="sale"> {saleNumber}%</span>}
        <p>{name}</p>
        {sale == 0.0 && (
          <p className="price">{originalPrice.toLocaleString()}원</p>
        )}
        {sale > 0 && (
          <div className="priceContainer">
            <p className="oldPrice"> {originalPrice.toLocaleString()}원 </p>
            <p className="salePrice">{finalPrice}원</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Product);
