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
                <input type="checkbox" onClick={handleAllChecked} />
              </th>
              <th className="productInfo">상품/옵션 정보</th>
              <th className="productQty">수량</th>
              <th className="productPrice">상품금액</th>
            </tr>
          </thead>
          <tbody className="cartItemContainer">
            {cartList.map(item => {
              return (
                <CartItem
                  cartItem={item}
                  key={item.id}
                  id={item.id}
                  imgSrc={item.url_image}
                  name={item.product}
                  quantity={item.quantity}
                  price={item.total_price}
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
