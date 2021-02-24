import React, { Component } from 'react';
import OrderListContainer from './Components/OrderListContainer/OrderListContainer';
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
      starRating: '',
      title: '',
      content: '',
      orderList: [],
      btnDisabled: false,
      submittedReviewArr: [],
      id: 0,
      serialNumber: 0,
    };
  }

  componentDidMount() {
    fetch('/data/orderData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          orderList: res,
        });
      });
  }

  handleStartChange = date => {
    this.setState({
      startDate: date,
    });
  };

  handleEndChange = date => {
    this.setState({
      endDate: date,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
  };

  handleBtnColor = () => {
    this.setState({ optionColor: !this.state.optionColor });
  };

  handleBtnClicked = e => {
    const todayDate = new Date();
    switch (e.target.value) {
      case '오늘':
        this.setState({
          startDate: new Date(),
          endDate: new Date(),
        });
        break;
      default:
        break;
    }
    switch (e.target.value) {
      case '7일':
        this.setState({
          startDate: new Date(todayDate.getTime() - 7 * 24 * 60 * 60 * 1000),
          endDate: new Date(),
        });
        break;
      default:
        break;
    }

    switch (e.target.value) {
      case '15일':
        let fifteendays = new Date(
          todayDate.getTime() - 15 * 24 * 60 * 60 * 1000
        );
        this.setState({
          startDate: fifteendays,
          endDate: new Date(),
        });
        break;
      default:
        break;
    }

    switch (e.target.value) {
      case '1개월':
        let oneMonth = new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 1,
          new Date().getDate()
        );
        this.setState({
          startDate: oneMonth,
          endDate: new Date(),
        });
        break;
      default:
        break;
    }

    switch (e.target.value) {
      case '3개월':
        let threeMonth = new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 3,
          new Date().getDate()
        );
        this.setState({
          startDate: threeMonth,
          endDate: new Date(),
        });
        break;
      default:
        break;
    }

    switch (e.target.value) {
      case '1년':
        let oneYear = new Date(
          new Date().getFullYear() - 1,
          new Date().getMonth(),
          new Date().getDate()
        );
        this.setState({
          startDate: oneYear,
          endDate: new Date(),
        });
        break;
      default:
        break;
    }
  };

  handleStatus = e => {
    const ProductStatus = ['대기', '취소', '환불', '구매확정'];
    const idx = e.target.value;
    const alertStatus = ProductStatus[idx];
    alert(alertStatus + '되었습니다!');
    this.props.history.push('/');
  };

  writeReview = e => {
    this.setState({
      isReviewModalOn: !this.state.isReviewModalOn,
      id: e.target.id,
      serialNumber: e.target.value,
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

  ///리뷰를 등록했을때 백앤드와 통신
  // submitReview = () => {
  //   fetch('http://10.58.3.212:8000/product/review', {
  //     method: 'POST',
  //     headers: {
  //       Authorization: localStorage.getItem('access_token'),
  //     },
  //     body: JSON.stringify({
  //       starRating: this.state.starRating,
  //       title: this.state.title,
  //       content: this.state.content,
  //       id: this.state.id,
  //       serialNumber: this.state.serialNumber,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(res =>
  //       res.message === 'SUCCESS'
  //         ? alert('리뷰가 등록되었습니다'),
  //         this.setState({
  //             isReviewModalOn: false,
  //             orderList: res,
  //           }) : alert('리뷰 등록이 실패하였습니다')
  //     );
  // };

  ///리뷰를 등록했을때 백앤드와 통신 안할때!
  submitReview = () => {
    this.setState({
      isReviewModalOn: false,
    });
    alert('리뷰가 등록되었습니다');
  };

  goToReview = () => {
    alert('리뷰로 갑니다');
  };

  render() {
    const {
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
      btnDisabled,
      isReviewModalOn,
    } = this.state;
    return (
      <div className="OrderHistory">
        <h1>주문목록/배송조회</h1>
        <Calendar
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
          handleStatus={handleStatus}
          btnDisabled={btnDisabled}
          isReviewModalOn={isReviewModalOn}
          getStarValue={getStarValue}
          handleReviewInput={handleReviewInput}
          submitReview={submitReview}
        />
      </div>
    );
  }
}

export default OrderHistory;
