import React, { Component } from 'react';
import './Payment.scss';

class Payment extends Component {
  render() {
    return (
      <div className="Payment">
        <h1>주문자 정보</h1>
        <table>
          <tr>
            <th>주문하시는 분</th>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>휴대폰 번호</th>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>
              <input />
            </td>
          </tr>
        </table>
        <h1>배송정보</h1>
        <table>
          <tr>
            <th>받으실분</th>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>받으실 곳</th>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>휴대폰 번호</th>
            <td>
              <input />
            </td>
          </tr>
        </table>
        <h1>결제정보</h1>
        <table>
          <tr>
            <th>상품 합계 금액</th>
            <td>
              <strong>29,500원</strong>
            </td>
          </tr>
          <tr>
            <th>배송비</th>
            <td>
              <p>2,500원</p>
            </td>
          </tr>
          <tr>
            <th>최종 결제 금액</th>
            <td>
              <p>32,000원</p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Payment;
