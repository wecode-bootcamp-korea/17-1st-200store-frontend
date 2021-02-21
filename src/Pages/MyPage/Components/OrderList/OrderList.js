import React, { Component } from 'react';
import OrderListItem from './Components/OrderListItem';
import './OrderList.scss';

class OrderList extends Component {
  render() {
    return (
      <div className="OrderList">
        <h3>주문목록 / 배송조회 내역 총 0건</h3>
        <table className="orderListTable">
          <thead>
            <tr className="headRow">
              <th className="dateAndNumber">날짜/주문번호</th>
              <th className="nameAndOption">상품명/옵션</th>
              <th className="priceAndQty">상품금액/수량</th>
              <th className="orderStatus">주문상태</th>
              <th className="confirmAndReview">확인/리뷰</th>
            </tr>
          </thead>
          <tbody className="orderItemContainer">
            <OrderListItem />
          </tbody>
        </table>
      </div>
    );
  }
}

export default OrderList;
