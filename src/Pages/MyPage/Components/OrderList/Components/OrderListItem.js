import React, { Component } from 'react';
import './OrderListItem.scss';

class OrderListItem extends Component {
  render() {
    return (
      <tr className="OrderListItem">
        <td className="dateAndNumber">2021022212345</td>
        <td className="nameAndOption">이건 상품명입니다</td>
        <td className="priceAndQty">
          <span>1200원</span>
          <span>3개</span>
        </td>
        <td className="orderStatus">주문완료</td>
        <td className="confirmAndReview">
          <button className="confirmBtn">배송 확인 하기</button>
        </td>
      </tr>
    );
  }
}

export default OrderListItem;
