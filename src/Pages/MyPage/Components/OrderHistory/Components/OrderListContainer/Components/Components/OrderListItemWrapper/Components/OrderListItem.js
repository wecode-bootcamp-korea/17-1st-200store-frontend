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

  render() {
    const {
      serialNum,
      orderItem,
      handleStatus,
      writeReview,
      goToReview,
      orderStatusId,
      getStarValue,
      handleReviewInput,
      submitReview,
      orderId,
      pressConfirm,
    } = this.props;

    const Oid = orderStatusId - 3;
    const Pid = orderItem.productStatus - 1;

    return (
      <tr className="OrderListItem">
        <td className="itemDetail">{serialNum}</td>
        <td className="itemDetail">{orderItem.name}</td>
        <td className="itemDetail">
          <span>
            {(orderItem.totalPrice / orderItem.quantity).toLocaleString()}원
          </span>
        </td>
        <td className="itemDetail">
          <span>{orderItem.quantity}개</span>
        </td>
        <td className="itemDetail">{OrderStatus[Oid]}</td>
        <td className="itemDetail">
          {!orderItem.isReview && Pid + 1 !== 4 && (
            <button onClick={handleStatus} value={Pid} className="statusBtn">
              {ProductStatus[Pid]}
            </button>
          )}
          {Pid + 1 !== 4 && !orderItem.isReview && (
            <button
              value={orderId}
              id={orderItem.id}
              className="confirmStatusBtn"
              onClick={pressConfirm}
            >
              구매확정
            </button>
          )}
          {!orderItem.isReview && Pid + 1 === 4 && (
            <>
              <p className="confirmPayment">구매확정</p>
              <button
                className="confirmStatusBtn"
                value={orderId}
                onClick={writeReview}
                id={orderItem.id}
              >
                리뷰쓰기
              </button>
            </>
          )}
          {orderItem.isReview && (
            <button onClick={goToReview} className="confirmStatusBtn">
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
  '결제완료',
  '상품준비중',
  '배송중',
  '배송완료',
];
const ProductStatus = ['대기', '취소', '환불', '구매확정'];
