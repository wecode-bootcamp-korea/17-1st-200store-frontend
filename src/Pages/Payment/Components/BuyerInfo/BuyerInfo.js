import React, { Component } from 'react';
import './BuyerInfo.scss';

class BuyerInfo extends Component {
  render() {
    const {
      handleAllInput,
      buyerName,
      buyerPhone,
      buyerEmail,
      handleEmailInput,
    } = this.props;
    return (
      <table className="BuyerInfo">
        <tbody>
          <tr>
            <th>
              <li>주문하시는 분</li>
            </th>
            <td>
              <input
                name="buyerName"
                onChange={handleAllInput}
                value={buyerName}
              />
            </td>
          </tr>
          <tr>
            <th className="notRequired">
              <li>전화번호</li>
            </th>
            <td>
              <input />
            </td>
          </tr>
          <tr>
            <th>
              <li>휴대폰 번호</li>
            </th>
            <td>
              <input
                name="buyerPhone"
                onChange={handleAllInput}
                value={buyerPhone}
              />
            </td>
          </tr>
          <tr>
            <th>
              <li>이메일</li>
            </th>
            <td>
              <form>
                <input
                  name="buyerEmail"
                  onChange={handleAllInput}
                  value={buyerEmail}
                />
                <select name="emailList" onChange={handleEmailInput}>
                  <option value="">직접입력</option>
                  <option value="naver.com">naver.com</option>
                  <option value="hanmail.net">hanmail.net</option>
                  <option value="daum.net">daum.net</option>
                  <option value="nate.com">nate.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="hotmail.com">hotmail.com</option>
                </select>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default BuyerInfo;
