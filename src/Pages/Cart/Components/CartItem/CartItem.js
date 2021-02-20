import React, { Component } from 'react';
import './CartItem.scss';

class CartItem extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.cartItem);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.cartItem);
  };

  handleDelete = () => {
    this.props.onRemove(this.props.cartItem);
  };

  render() {
    // const itemDeliveryFee = this.props.price < 30000 ? 2500 : 0;
    return (
      <tr className="CartItem">
        <td className="checkbox">
          <input
            type="checkbox"
            id={this.props.id}
            checked={this.props.cartItem.value}
            onChange={this.props.onChecked}
          />
        </td>
        <td className="productInfoContainer">
          <div className="productInfo">
            <img alt={this.props.name} src={this.props.imgSrc} />
            <p className="productName">{this.props.name}</p>
          </div>
        </td>
        <td className="productQtyContainer">
          <div className="productQty">
            <i class="fas fa-minus" onClick={this.handleDecrement} />
            <p>{this.props.quantity}</p>
            <i class="fas fa-plus" onClick={this.handleIncrement} />
          </div>
        </td>
        <td className="productPrice">
          {(this.props.price * this.props.quantity).toLocaleString()}원
        </td>
        {/* <td className="deliveryFee">
          <p>기본배송비</p>
          <p>{this.props.itemDeliveryFee}원</p>
          <p>(택배-선결제)</p>
        </td> */}
      </tr>
    );
  }
}

export default CartItem;
