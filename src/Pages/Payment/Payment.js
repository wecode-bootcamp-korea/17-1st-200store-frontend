import React, { Component } from 'react';
import DaumPostCode from 'react-daum-postcode';
import BuyerInfo from './Components/BuyerInfo/BuyerInfo';
import DeliveryInfo from './Components/DeliveryInfo/DeliveryInfo';
import PaymentInfo from './Components/PaymentInfo/PaymentInfo';
import './Payment.scss';

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      buyerName: '',
      buyerPhone: '',
      buyerEmail: '',
      receiverName: '',
      fullAddress: '',
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

  // 백앤드와 통신시 사용할 fetch 함수
  // paymentComplete = () => {
  //   fetch('API', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       buyerName: this.state.buyerName,
  //       buyerPhone: this.state.buyerPhone,
  //       buyerEmail: this.state.buyerEmail,
  //       receiverName: this.state.receiverName,
  //       receiverAddress: this.state.fullAddress,
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
    const width = 595;
    const height = 450;
    const modalStyle = {
      display: 'block',
      position: 'absolute',
      top: '20%',
      left: '60%',
      zIndex: '1000',
      border: '1px solid #000000',
      overflow: 'hidden',
    };
    const {
      isDaumPost,
      fullAddress,
      zoneCode,
      buyerName,
      buyerPhone,
      buyerEmail,
      receiverName,
      receiverPhone,
    } = this.state;
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

        <h2>주문자 정보</h2>
        <BuyerInfo
          handleAllInput={this.handleAllInput}
          buyerName={buyerName}
          buyerPhone={buyerPhone}
          buyerEmail={buyerEmail}
          handleEmailInput={this.handleEmailInput}
        />
        <h2>배송정보</h2>
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
        <DeliveryInfo
          handleAllInput={this.handleAllInput}
          receiverName={receiverName}
          receiverPhone={receiverPhone}
          fullAddress={fullAddress}
          zoneCode={zoneCode}
          handlePostSearch={this.handlePostSearch}
        />
        <h2>결제정보</h2>
        <PaymentInfo />
        <section>
          <span>
            최종 결제 금액
            <strong>100,000원</strong>
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
