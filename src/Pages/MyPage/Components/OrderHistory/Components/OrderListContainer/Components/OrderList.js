import React, { Component } from 'react';
import OrderListItem from './Components/OrderListItemWrapper/Components/OrderListItem';
import './OrderList.scss';

class OrderList extends Component {
  render() {
    return (
      <>
        <tbody className="orderItemContainer">
          <h4>2021-02-21</h4>
          {/* 몇개 샀는지 만큼 맵돌리기 */}
          <OrderListItem writeReview={this.props.writeReview} />
        </tbody>
        <div className="totalPrice">
          <p>
            총 금액<span>100,000원</span>
          </p>
        </div>
      </>
    );
  }
}

export default OrderList;
