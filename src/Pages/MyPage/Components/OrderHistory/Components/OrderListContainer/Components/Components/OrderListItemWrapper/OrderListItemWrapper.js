import React, { Component } from 'react';
import OrderListItem from './Components/OrderListItem';
import './OrderListItemWrapper.scss';

class OrderListItemWrapper extends Component {
  render() {
    return (
      <>
        {/* 한번에 몇개 샀는지만큼 맵 돌리기 */}
        <OrderListItem />
        <OrderListItem />
      </>
    );
  }
}

export default OrderListItemWrapper;
