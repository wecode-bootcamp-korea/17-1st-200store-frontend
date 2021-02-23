import React, { Component } from 'react';
import CartItem from '../CartItem/CartItem';
import './CartList.scss';

class CartList extends Component {
  render() {
    const {
      handleAllChecked,
      onIncrement,
      onDecrement,
      onChecked,
      cartList,
    } = this.props;
    return (
      <form className="CartList">
        <table>
          <thead>
            <tr className="headRow">
              <th className="checkBoxAll">
                <input
                  type="checkbox"
                  onClick={handleAllChecked}
                  checked={cartList.every(item => item.value === true)}
                />
              </th>
              <th className="productInfo">상품/옵션 정보</th>
              <th className="productQty">수량</th>
              <th className="productPrice">상품금액</th>
            </tr>
          </thead>
          <tbody className="cartItemContainer">
            {cartList.map(item => {
              console.log({ item });
              return (
                <CartItem
                  cartItem={item}
                  key={item.productId}
                  id={item.productId}
                  imgSrc={item.urlImage}
                  name={item.product}
                  quantity={item.quantity}
                  price={item.eachPrice}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  onChecked={onChecked}
                />
              );
            })}
          </tbody>
        </table>
      </form>
    );
  }
}

export default CartList;
