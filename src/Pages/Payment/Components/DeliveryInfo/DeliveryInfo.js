import React, { Component } from 'react';
import './DeliveryInfo.scss';

class DeliveryInfo extends Component {
  render() {
    const {
      handleAllInput,
      receiverName,
      handlePostSearch,
      zoneCode,
      fullAddress,
      receiverPhone,
    } = this.props;
    return (
      <table className="deliveryInfo">
        <tbody>
          <tr>
            <th>
              <li>받으실분</li>
            </th>
            <td className="tdInDeliveryInfo">
              <input
                className="deliveryInfoInput"
                name="receiverName"
                onChange={handleAllInput}
                value={receiverName}
              />
            </td>
          </tr>
          <tr>
            <th rowSpan="2">
              <li>받으실 곳</li>
            </th>
            <td className="tdInDeliveryInfo">
              <input
                className="inputDeliveryInfo"
                name="receiverPostCode"
                onChange={handleAllInput}
                value={zoneCode}
              />
              <button onClick={handlePostSearch}>우편번호검색</button>
            </td>
          </tr>
          <tr>
            <td className="tdInDeliveryInfo">
              <input
                className="addressLongInput"
                name="receiverAddress"
                value={fullAddress}
                onChange={handleAllInput}
              />
              <input className="addressShortInput" />
            </td>
          </tr>
          <tr>
            <th className="notRequired">
              <li>전화번호</li>
            </th>
            <td className="tdInDeliveryInfo">
              <input />
            </td>
          </tr>
          <tr>
            <th>
              <li>휴대폰 번호</li>
            </th>
            <td>
              <input
                name="receiverPhone"
                onChange={handleAllInput}
                value={receiverPhone}
              />
            </td>
          </tr>
          <tr>
            <th className="notRequired">
              <li>남기실 말씀</li>
            </th>
            <td>
              <input />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default DeliveryInfo;
