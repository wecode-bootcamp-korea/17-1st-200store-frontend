import React, { Component } from 'react';
import OrderList from './Components/OrderList';
import './OrderListContainer.scss';

class OrderListContainer extends Component {
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
    } = this.props;
    return (
      <div className="OrderListContainer">
        <h3>주문목록 / 배송조회 내역 총 0건</h3>
        <table className="orderListTable">
          <thead>
            <tr className="headRow">
              <th className="dateAndNumber">날짜/주문번호</th>
              <th className="nameAndOption">상품명/옵션</th>
              <th className="price">상품금액</th>
              <th className="qty">수량</th>
              <th className="orderStatus">주문상태</th>
              <th className="confirmAndReview">확인/리뷰</th>
            </tr>
          </thead>
          {this.props.orderList.map((item, idx) => {
            return (
              <OrderList
                key={idx}
                orderArticle={item}
                writeReview={writeReview}
                goToReview={goToReview}
                handleStatus={handleStatus}
                btnDisabled={btnDisabled}
                isReviewModalOn={isReviewModalOn}
                getStarValue={getStarValue}
                handleReviewInput={handleReviewInput}
                submitReview={submitReview}
              />
            );
          })}
        </table>
      </div>
    );
  }
}

export default OrderListContainer;
