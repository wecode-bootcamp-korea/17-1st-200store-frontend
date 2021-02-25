import React, { Component } from 'react';
import OrderListItem from './Components/OrderListItemWrapper/Components/OrderListItem';
import './OrderList.scss';

class OrderList extends Component {
  render() {
    const {
      writeReview,
      goToReview,
      handleStatus,
      btnDisabled,
      isReviewModalOn,
      getStarValue,
      handleReviewInput,
      submitReview,
      orderArticle,
      pressConfirm,
    } = this.props;
    const serialNum = this.props.orderArticle.serialNumber;
    const orderStatusId = this.props.orderArticle.orderStatus;
    const date = this.props.orderArticle.orderDate
      .split('')
      .slice(0, 10)
      .join('');
    const orderId = this.props.orderArticle.orderId;
    return (
      <tbody className="orderItemContainer">
        <tr className="orderDate">
          <td>{date}</td>
        </tr>
        {orderArticle.subProducts.map((item, idx) => {
          return (
            <OrderListItem
              key={idx}
              orderItem={item}
              serialNum={serialNum}
              orderStatusId={orderStatusId}
              writeReview={writeReview}
              goToReview={goToReview}
              handleStatus={handleStatus}
              btnDisabled={btnDisabled}
              isReviewModalOn={isReviewModalOn}
              getStarValue={getStarValue}
              handleReviewInput={handleReviewInput}
              submitReview={submitReview}
              orderId={orderId}
              pressConfirm={pressConfirm}
            />
          );
        })}
      </tbody>
    );
  }
}

export default OrderList;
