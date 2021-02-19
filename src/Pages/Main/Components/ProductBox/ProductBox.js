import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ProductBox.scss';

class ProductBox extends Component {
  finalPrice = (
    Math.round((this.props.price * (1 - this.props.sale)) / 1000) * 1000
  ).toLocaleString();

  saleNumber = this.props.sale * 100;

  goToMyPage = () => {
    this.props.history.push('/mypage');
  };

  goToCart = () => {
    this.props.history.push('/cart');
  };

  render() {
    const { name, imgSrc, isBest, isNew, isSale, sale, price } = this.props;
    return (
      <div className="ProductBox">
        <div
          className="productImage"
          style={{
            backgroundImage: `url(${imgSrc})`,
          }}
        >
          <div className="labelContainer">
            {isBest && <span className="isBest"> BEST </span>}
            {isNew && <span className="isNew">NEW</span>}
            {isSale && <span className="isSale"> SALE </span>}
          </div>
          <div className="hoverContainer">
            <div onClick={this.goToMyPage} className="hoverHeart">
              <i className="far fa-heart" />
            </div>
            <div onClick={this.goToCart} className="hoverCart">
              <i className="fas fa-shopping-cart" />
            </div>
          </div>
        </div>
        {Boolean(sale) && <span className="sale"> {this.saleNumber}%</span>}
        <p>{name}</p>
        {!sale && <p className="price">{price.toLocaleString()}원</p>}
        {Boolean(sale) && (
          <div className="priceContainer">
            <p className="oldPrice"> {price.toLocaleString()}원 </p>
            <p className="salePrice">{this.finalPrice}원</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(ProductBox);
