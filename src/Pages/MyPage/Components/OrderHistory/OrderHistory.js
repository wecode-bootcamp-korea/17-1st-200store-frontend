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
    };
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
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

  btnHandler = e => {
    this.handleBtnColor();
    this.handleBtnClicked(e);
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
  submitReview = () => {
    // fetch('data/cartListData.json', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     starRating: this.state.starRating,
    //     title: this.state.title,
    //     content: this.state.content,
    //     productId: 1,
    //     orderId: 100,
    //   }),
    // })
    // .then(res => res.json())
    // .then(res =>
    //   res.message === 'SUCCESS'
    //     ? alert('리뷰가 등록되었습니다'):
    console.log('찍힌다! 찍힌다 ! 찍힌다! 찍힌다!');
    this.setState({
      isReviewViewOn: true,
      isReviewModalOn: false,
    });
    // );
  };

  goToReview = () => {
    // fetch('', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     productId: 1,
    //   }),
    // });
    console.log('REVIEW로 가라');
  };

  render() {
    console.log('token checkkk', localStorage.getItem('accessToken'));
    return (
      <div className="OrderHistory">
        <h1>주문목록/배송조회</h1>
        <Calendar
          btnHandler={this.btnHandler}
          handleBtnClicked={this.handleBtnClicked}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          handleStartChange={this.handleStartChange}
          handleEndChange={this.handleEndChange}
        />
        <OrderListContainer
          goToReview={this.goToReview}
          writeReview={this.writeReview}
          isReviewViewOn={this.state.isReviewViewOn}
        />
        {this.state.isReviewModalOn && (
          <Modal
            writeReview={this.writeReview}
            getStarValue={this.getStarValue}
            handleReviewInput={this.handleReviewInput}
            submitReview={this.submitReview}
          />
        )}
      </div>
    );
  }
}

export default OrderHistory;
