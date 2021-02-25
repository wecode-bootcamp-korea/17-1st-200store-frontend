import React, { Component } from 'react';
import './CartPrice.scss';

class CartPrice extends Component {
  render() {
    const {
      cartList,
      selectedItems,
      sumPrice,
      deliveryFee,
      price,
    } = this.props;
    return (
      <section className="CartPrice">
        <div className="productPrice">
          <p>
            총<strong>{selectedItems.length}</strong>개의 상품금액
          </p>
          <p>
            <strong>{sumPrice.toLocaleString()}</strong>원
          </p>
        </div>
        <i className="fas fa-plus-circle" />
        <div className="deliveryFee">
          <p>배송비</p>
          <p>
            <strong>
              {!cartList.length ? 0 : deliveryFee.toLocaleString()}
            </strong>
            원
          </p>
        </div>
        <i className="fas fa-equals" />
        <div className="totalPriceInCart">
          <p className="totalPriceText">합계</p>
          <p>
            <strong className="totalColor">{price.toLocaleString()}</strong>원
          </p>
        </div>
      </section>
    );
  }
}

export default CartPrice;
