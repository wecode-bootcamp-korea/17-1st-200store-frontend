import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './ProductBox.scss';

class ProductBox extends Component {
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

    const { name, imgSrc, isBest, isNew, isSale, sale } = this.props;
    return (
      <div
        onClick={() => this.goToDetail(this.props.id)}
        className="ProductBox"
      >
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
            <div className="hoverHeart">
              <i className="far fa-heart" />
            </div>
            <div className="hoverCart">
              <i className="fas fa-shopping-cart" />
            </div>
          </div>
        </div>
        {sale > 0 && <span className="sale"> {saleNumber}%</span>}
        <p>{name}</p>
        {!saleNumToInt && <p className="price">{originalPrice}원</p>}
        {sale > 0 && (
          <div className="priceContainer">
            <p className="oldPrice"> {originalPrice}원 </p>
            <p className="salePrice">{finalPrice}원</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(ProductBox);
