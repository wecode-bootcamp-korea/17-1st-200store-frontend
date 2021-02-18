import React, { Component } from 'react';
import './CartItem.scss';

class CartItem extends Component {
  render() {
    console.log(this.props.item);
    return (
      <tr className="CartItem" id={this.props.item.id}>
        <td className="checkbox">
          <input type="checkbox" />
        </td>
        <td className="productInfoContainer">
          <div className="productInfo">
            <img alt={this.props.item.name} src={this.props.item.imgSrc} />
            <p className="productName">{this.props.item.name}</p>
          </div>
        </td>
        <td className="productQtyContainer">
          <div className="productQty">
            <p>{this.props.item.quantity}</p>
            <button>옵션/수량변경</button>
          </div>
        </td>
        <td className="productPrice">
          {this.props.item.price.toLocaleString()}원
        </td>
        <td className="deliveryFee">
          <p>기본배송비</p>
          <p>0원</p>
          <p>(택배-선결제)</p>
        </td>
      </tr>
    );
  }
}

export default CartItem;
