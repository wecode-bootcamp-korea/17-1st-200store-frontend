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
    const {
      serialNum,
      orderItem,
      btnDisabled,
      handleStatus,
      isReviewViewOn,
      writeReview,
      goToReview,
      orderStatusId,
    } = this.props;
    const { confirmPaymentBtn } = this.state;
    const Oid = orderStatusId - 1;
    const Pid = orderItem.productStatus - 1;
    const OrderStatus = ['입금대기', '입금완료', '배송중', '배송완료'];
    const ProductStatus = ['취소', '교환', '환불', '구매확정'];
    return (
      <tr className="OrderListItem">
        <td className="dateAndNumber">{serialNum}</td>
        <td className="nameAndOption">{orderItem.name}</td>
        <td className="price">
          <span>
            {(orderItem.totalPrice / orderItem.quantity).toLocaleString()}원
          </span>
        </td>
        <td className="qty">
          <span>{orderItem.quantity}개</span>
        </td>
        <td className="orderStatus">{OrderStatus[Oid]}</td>
        <td className="confirmAndReview">
          {Pid + 1 !== 4 && !btnDisabled && (
            <button onClick={handleStatus} value={Pid} className="statusBtn">
              교환/취소/환불
            </button>
          )}
          {Pid + 1 !== 4 && btnDisabled && <p>{ProductStatus[Pid]}</p>}
          {Pid + 1 === 4 && !isReviewViewOn && !confirmPaymentBtn && (
            <button className="confirmBtn" onClick={this.confirmPayment}>
              구매확정
            </button>
          )}
          {!isReviewViewOn && confirmPaymentBtn && (
            <>
              <p>구매확정</p>
              <button className="reviewBtn" onClick={writeReview}>
                리뷰쓰기
              </button>
            </>
          )}
          {Pid + 1 === 4 && isReviewViewOn && (
            <button onClick={goToReview} className="viewReview">
              리뷰보기
            </button>
          )}
        </td>
      </tr>
    );
  }
}

export default OrderListItem;
