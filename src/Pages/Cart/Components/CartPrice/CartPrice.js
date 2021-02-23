import React, { Component } from 'react';
import './CartPrice.scss';

class CartPrice extends Component {
  render() {
    const {
      cartList,
      selectedItems,
      sumPrice,
      deliveryFee,
      totalPrice,
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
        <i class="fas fa-plus-circle" />
        <div className="deliveryFee">
          <p>배송비</p>
          <p>
            <strong>
              {!cartList.length ? 0 : deliveryFee.toLocaleString()}
            </strong>
            원
          </p>
        </div>
        <i class="fas fa-equals" />
        <div className="totalPricetoPayment">
          <p>합계</p>
          <p>
            <strong className="totalColor">
              {totalPrice.toLocaleString()}
            </strong>
            원
          </p>
        </div>
      </section>
    );
  }
}

export default CartPrice;
