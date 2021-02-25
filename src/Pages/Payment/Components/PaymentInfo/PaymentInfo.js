import React, { Component } from 'react';
import './PaymentInfo.scss';

class PaymentInfo extends Component {
  render() {
    return (
      <table className="PaymentInfo">
        <tbody>
          <tr className="trInPaymentInfo">
            <th className="thInPaymentInfo">
              <li>상품 합계 금액</li>
            </th>
            <td>
              <p>
                <strong>{this.props.sumPrice.toLocaleString()}</strong>원
              </p>
            </td>
          </tr>
          <tr>
            <th>
              <li>배송비</li>
            </th>
            <td>
              <p>{this.props.deliveryFee.toLocaleString()}원</p>
            </td>
          </tr>
          <tr>
            <th>
              <li>최종 결제 금액</li>
            </th>
            <td>
              <p>
                <strong>{this.props.totalPrice.toLocaleString()}</strong>원
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PaymentInfo;
