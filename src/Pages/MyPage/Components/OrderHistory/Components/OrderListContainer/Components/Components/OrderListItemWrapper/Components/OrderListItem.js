import React, { Component } from 'react';
import './OrderListItem.scss';
class OrderListItem extends Component {
  constructor() {
    super();
    this.state = {
      confirmPaymentBtn: false,
    };
  }

  confirmPayment = () => {
    this.setState({
      confirmPaymentBtn: !this.state.confirmPaymentBtn,
    });
    alert('구매가 확정되었습니다~~!');
  };

  render() {
    // console.log('review view on', this.props.isReviewViewOn);
    return (
      <tr className="OrderListItem">
        <td className="dateAndNumber">2021022212345</td>
        <td className="nameAndOption">이건 상품명입니다</td>
        <td className="price">
          <span>1200원</span>
        </td>
        <td className="qty">
          <span>3개</span>
        </td>
        <td className="orderStatus">주문완료</td>
        <td className="confirmAndReview">
          {!this.props.isReviewViewOn && !this.state.confirmPaymentBtn && (
            <button className="confirmBtn" onClick={this.confirmPayment}>
              구매확정
            </button>
          )}
          {!this.props.isReviewViewOn && this.state.confirmPaymentBtn && (
            <>
              <p>구매확정</p>
              <button className="reviewBtn" onClick={this.props.writeReview}>
                리뷰쓰기
              </button>
            </>
          )}

          {this.props.isReviewViewOn && (
            <button onClick={this.props.goToReview} className="viewReview">
              리뷰보기
            </button>
          )}
        </td>
      </tr>
    );
  }
}

export default OrderListItem;
