import React, { Component } from 'react';
import DaumPostCode from 'react-daum-postcode';
import './Payment.scss';

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      buyerName: '',
      buyerPhone: '',
      buyerEmail: '',
      receiverName: '',
      receiverAddress: '',
      receiverPostCode: '',
      receiverPhone: '',
      isDaumPost: false,
    };
  }

  handleAllInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleEmailInput = e => {
    this.setState({ buyerEmail: this.state.buyerEmail + '@' + e.target.value });
  };

  handlePostSearch = () => {
    this.setState({
      isDaumPost: true,
    });
  };

  handleAddress = data => {
    let AllAddress = data.address;
    let extraAddress = '';
    let zoneCodes = data.zonecode;

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      AllAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    this.setState({
      fullAddress: AllAddress,
      zoneCode: zoneCodes,
      isDaumPost: false,
    });
  };

  closePostSearch = e => {
    if (e.key === 27) {
      this.setState({ isDaumPost: false });
    }
  };

  // paymentComplete = () => {
  //   fetch('API', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       buyerName: this.state.buyerName,
  //       buyerPhone: this.state.buyerPhone,
  //       buyerEmail: this.state.buyerEmail,
  //       receiverName: this.state.receiverName,
  //       receiverAddress: this.state.receiverAddress,
  //       receiverPostCode: this.state.receiverPostCode,
  //       receiverPhone: this.state.receiverPhone,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result =>
  //       result.message === 'SUCCESS'
  //         ? alert('결제가 완료 되었습니다~!')
  //         : alert('결제 실패')
  //     );
  // };

  render() {
    console.log('주소야 떠라', this.state.receiverAddress);
    const width = 595;
    const height = 450;
    const modalStyle = {
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      zIndex: '1000',
      border: '1px solid #000000',
      overflow: 'hidden',
    };
    const { isDaumPost, fullAddress, zoneCode } = this.state;
    return (
      <div className="Payment">
        <header>
          <h1>주문서작성/결제</h1>
          <ul>
            <li>01 장바구니</li>
            <i class="fas fa-chevron-right" />
            <li className="currentStep">02 주문서작성/결제</li>
            <i id="currentSection" class="fas fa-chevron-right" />
            <li>03 주문완료</li>
          </ul>
        </header>
        {isDaumPost ? (
          <DaumPostCode
            onComplete={this.handleAddress}
            autoClose
            width={width}
            height={height}
            style={modalStyle}
            isDaumPost={isDaumPost}
          />
        ) : null}
        <h2>주문자 정보</h2>
        <table className="buyerInfo">
          <tr>
            <th>
              <li>주문하시는 분</li>
            </th>
            <td>
              <input
                name="buyerName"
                onChange={this.handleAllInput}
                value={this.state.buyerName}
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
                onChange={this.handleAllInput}
                value={this.state.buyerPhone}
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
                  onChange={this.handleAllInput}
                  value={this.state.buyerEmail}
                />
                <select name="emailList" onChange={this.handleEmailInput}>
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
        </table>
        <h2>배송정보</h2>
        <table className="deliveryInfo">
          <tr>
            <th>
              <li>받으실분</li>
            </th>
            <td>
              <input
                name="receiverName"
                onChange={this.handleAllInput}
                value={this.state.receiverName}
              />
            </td>
          </tr>
          <tr>
            <th rowSpan="2">
              <li>받으실 곳</li>
            </th>
            <td>
              <input
                name="receiverPostCode"
                onChange={this.handleAllInput}
                value={zoneCode}
              />
              <button onClick={this.handlePostSearch}>우편번호검색</button>
            </td>
          </tr>
          <tr>
            <td>
              <input
                className="addressLongInput"
                name="receiverAddress"
                value={fullAddress}
                onChange={this.handleAllInput}
              />
              <input className="addressShortInput" />
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
                name="receiverPhone"
                onChange={this.handleAllInput}
                value={this.state.receiverPhone}
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
        </table>
        <h2>결제정보</h2>
        <table className="paymentInfo">
          <tr>
            <th>
              <li>상품 합계 금액</li>
            </th>
            <td>
              <p>
                <strong>29,500</strong>원
              </p>
            </td>
          </tr>
          <tr>
            <th>
              <li>배송비</li>
            </th>
            <td>
              <p>2,500원</p>
            </td>
          </tr>
          <tr>
            <th>
              <li>최종 결제 금액</li>
            </th>
            <td>
              <p>
                <strong>32,000</strong>원
              </p>
            </td>
          </tr>
        </table>
        <section>
          <span>
            최종 결제 금액
            <strong>32,000원</strong>
          </span>
        </section>
        <div class="paymentFooter">
          <span>
            전자상거래 등에서의 소비자보호에 관한 법률에 의거하여 미성년자가
            물품을 구매하는 경우,
          </span>
          <span>
            법정대리인이 동의하지 않으면 미성년자 본인 또는 법정대리인이 구매를
            취소할 수 있습니다.
          </span>
          <div class="confirmContainer">
            <input type="checkbox" />
            <b>(필수)</b>
            구매하실 상품의 결제정보를 확인하였으며, 구매진행에 동의합니다.
          </div>
          <button onClick={this.paymentComplete}>결제하기</button>
        </div>
      </div>
    );
  }
}

export default Payment;
