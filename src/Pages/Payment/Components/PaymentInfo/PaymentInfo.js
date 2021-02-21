import React, { Component } from 'react';

class PaymentInfo extends Component {
  render() {
    return (
      <table className="PaymentInfo">
        <tr>
          <th>
            <li>상품 합계 금액</li>
          </th>
          <td>
            <p>
              <strong>100,000</strong>원
            </p>
          </td>
        </tr>
        <tr>
          <th>
            <li>배송비</li>
          </th>
          <td>
            <p>0원</p>
          </td>
        </tr>
        <tr>
          <th>
            <li>최종 결제 금액</li>
          </th>
          <td>
            <p>
              <strong>100,000</strong>원
            </p>
          </td>
        </tr>
      </table>
    );
  }
}

export default PaymentInfo;
