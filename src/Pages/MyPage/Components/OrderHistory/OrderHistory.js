import React, { Component } from 'react';
import OrderListContainer from './Components/OrderListContainer/OrderListContainer';
import Modal from '../Modal.js';
import Calendar from './Components/Calendar/Calendar';
import './OrderHistory.scss';
import './react-datepicker.css';

class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      isReviewModalOn: false,
      isReviewViewOn: false,
      starRating: '',
      title: '',
      content: '',
      orderList: [],
      btnDisabled: false,
    };
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    fetch('data/orderData.json')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          orderList: res,
        });
      });
  }

  handleStartChange(date) {
    this.setState({
      startDate: date,
    });
  }

  handleEndChange(date) {
    this.setState({
      endDate: date,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  handleBtnColor = () => {
    this.setState({ optionColor: !this.state.optionColor });
  };

  handleBtnClicked = e => {
    const todayDate = new Date();
    if (e.target.value === '오늘') {
      this.setState({
        startDate: new Date(),
        endDate: new Date(),
      });
    }

    if (e.target.value === '7일') {
      let oneweek = new Date(todayDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      this.setState({
        startDate: oneweek,
        endDate: new Date(),
      });
    }

    if (e.target.value === '15일') {
      let fifteendays = new Date(
        todayDate.getTime() - 15 * 24 * 60 * 60 * 1000
      );
      this.setState({
        startDate: fifteendays,
        endDate: new Date(),
      });
    }
    if (e.target.value === '1개월') {
      let oneMonth = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        new Date().getDate()
      );
      this.setState({
        startDate: oneMonth,
        endDate: new Date(),
      });
    }

    if (e.target.value === '3개월') {
      let threeMonth = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 3,
        new Date().getDate()
      );
      this.setState({
        startDate: threeMonth,
        endDate: new Date(),
      });
    }

    if (e.target.value === '1년') {
      let oneYear = new Date(
        new Date().getFullYear() - 1,
        new Date().getMonth(),
        new Date().getDate()
      );
      this.setState({
        startDate: oneYear,
        endDate: new Date(),
      });
    }
  };

  handleStatus = e => {
    const ProductStatus = ['취소', '교환', '환불', '구매확정'];
    const idx = e.target.value;
    const alertStatus = ProductStatus[idx];
    alert(alertStatus + '되었습니다!');
  };

  writeReview = () => {
    this.setState({
      isReviewModalOn: !this.state.isReviewModalOn,
    });
  };

  getStarValue = e => {
    this.setState({
      starRating: e.target.value,
    });
  };

  handleReviewInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  ///리뷰를 등록했을때
  // submitReview = () => {
  //   // fetch('http://10.58.3.212:8000/product/review', {
  //   //   method: 'POST',
  //   //   headers: {
  //   //     Authorization:
  //   //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyX3BrIjoyfQ.-hXNRSynjJnpQffSHiwEw_HUSghbUCErZh-es4w3E9C7FprAfw1JQR9HKCxxYvEbll8I1zbwNkxenD-4DOHdvw',
  //   //   },
  //   //   body: JSON.stringify({
  //   //     starRating: this.state.starRating,
  //   //     title: this.state.title,
  //   //     content: this.state.content,
  //   //     productId: 1,
  //   //     orderId: 100,
  //   //   }),
  //   // })
  //   //   .then(res => res.json())
  //   //   .then(res =>
  //   //     res.message === 'SUCCESS'
  //   //       ? alert('리뷰가 등록되었습니다')
  //   //       : this.setState({
  //   //           isReviewViewOn: true,
  //   //           isReviewModalOn: false,
  //   //         })
  //   //   );
  // };

  goToReview = () => {
    // fetch('', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     productId: 1,
    //   }),
    // });
    alert('리뷰로 가버렸...');
  };

  render() {
    const {
      btnHandler,
      handleBtnClicked,
      handleStartChange,
      handleEndChange,
      goToReview,
      writeReview,
      handleStatus,
      getStarValue,
      handleReviewInput,
      submitReview,
    } = this;

    const {
      startDate,
      endDate,
      orderList,
      isReviewViewOn,
      btnDisabled,
      isReviewModalOn,
    } = this.state;
    return (
      <div className="OrderHistory">
        <h1>주문목록/배송조회</h1>
        <Calendar
          btnHandler={btnHandler}
          handleBtnClicked={handleBtnClicked}
          startDate={startDate}
          endDate={endDate}
          handleStartChange={handleStartChange}
          handleEndChange={handleEndChange}
        />
        <OrderListContainer
          orderList={orderList}
          goToReview={goToReview}
          writeReview={writeReview}
          isReviewViewOn={isReviewViewOn}
          handleStatus={handleStatus}
          btnDisabled={btnDisabled}
        />
        {isReviewModalOn && (
          <Modal
            writeReview={writeReview}
            getStarValue={getStarValue}
            handleReviewInput={handleReviewInput}
            submitReview={submitReview}
          />
        )}
      </div>
    );
  }
}

export default OrderHistory;
