import React, { Component } from 'react';
import Modal from '../../../../../../../Modal';
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
      writeReview,
      goToReview,
      orderStatusId,
      isReview,
      getStarValue,
      handleReviewInput,
      submitReview,
      orderId,
    } = this.props;
    const { confirmPaymentBtn } = this.state;
    const Oid = orderStatusId - 2;
    const Pid = orderItem.productStatus - 1;
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
              {ProductStatus[Pid]}
            </button>
          )}
          {Pid + 1 !== 4 && btnDisabled && <p>{ProductStatus[Pid]}</p>}
          {Pid + 1 === 4 && !isReview && !confirmPaymentBtn && (
            <button className="confirmBtn" onClick={this.confirmPayment}>
              구매확정
            </button>
          )}
          {!isReview && confirmPaymentBtn && (
            <>
              <p className="confirmPayment">구매확정</p>
              <button
                className="writeReviewBtn"
                value={orderId}
                onClick={writeReview}
                id={orderItem.id}
              >
                리뷰쓰기
              </button>
            </>
          )}
          {isReview && (
            <button onClick={goToReview} className="viewReview">
              리뷰보기
            </button>
          )}
          {this.props.isReviewModalOn && (
            <Modal
              writeReview={writeReview}
              getStarValue={getStarValue}
              handleReviewInput={handleReviewInput}
              submitReview={submitReview}
            />
          )}
        </td>
      </tr>
    );
  }
}

export default OrderListItem;

const OrderStatus = [
  '입금대기',
  '결재완료',
  '상품준비중',
  '배송중',
  '배송완료',
];
const ProductStatus = ['대기', '취소', '환불', '구매확정'];
