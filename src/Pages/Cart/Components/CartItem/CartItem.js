import React, { Component } from 'react';
import './CartItem.scss';

class CartItem extends Component {
  render() {
    const {
      price,
      quantity,
      id,
      onChecked,
      cartItem,
      name,
      imgSrc,
      onDecrement,
      onIncrement,
    } = this.props;
    const productPrice = price * quantity;
    console.log('this.props.cartItem.value', this.props.cartItem.value);
    return (
      <tr className="CartItem">
        <td className="checkbox">
          <input
            type="checkbox"
            id={id}
            onChange={onChecked}
            checked={cartItem.value}
          />
        </td>
        <td className="productInfoContainer">
          <div className="productInfo">
            <img alt={name} src={imgSrc} />
            <p className="productName">{name}</p>
          </div>
        </td>
        <td className="productQtyContainer">
          <div className="productQty">
            <i class="fas fa-minus" onClick={() => onDecrement(cartItem)} />
            <p>{quantity}</p>
            <i class="fas fa-plus" onClick={() => onIncrement(cartItem)} />
          </div>
        </td>
        <td className="productPrice">{productPrice.toLocaleString()}원</td>
      </tr>
    );
  }
}

export default CartItem;
