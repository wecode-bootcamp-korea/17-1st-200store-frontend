import React, { Component } from 'react';
import OrderListItem from './Components/OrderListItemWrapper/Components/OrderListItem';
import './OrderList.scss';

class OrderList extends Component {
  render() {
    const {
      writeReview,
      isReviewViewOn,
      goToReview,
      handleStatus,
      btnDisabled,
    } = this.props;
    const serialNum = this.props.orderArticle.serialNumber;
    const orderStatusId = this.props.orderArticle.orderStatus;
    return (
      <>
        <tbody className="orderItemContainer">
          <h4>{this.props.orderArticle.orderDate}</h4>
          {this.props.orderArticle.subProducts.map(item => {
            return (
              <OrderListItem
                orderItem={item}
                serialNum={serialNum}
                orderStatusId={orderStatusId}
                writeReview={writeReview}
                isReviewViewOn={isReviewViewOn}
                goToReview={goToReview}
                handleStatus={handleStatus}
                btnDisabled={btnDisabled}
              />
            );
          })}
        </tbody>
      </>
    );
  }
}

export default OrderList;
