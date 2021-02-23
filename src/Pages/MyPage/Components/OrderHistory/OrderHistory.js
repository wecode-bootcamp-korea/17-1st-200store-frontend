import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import OrderListContainer from './Components/OrderListContainer/OrderListContainer';
import Modal from '../Modal.js';
import './OrderHistory.scss';
import './react-datepicker.css';

class OrderHistory extends Component {
  constructor(props) {
    super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      optionColor: true,
      isReviewModalOn: false,
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
  render() {
    let optionBtn = this.state.optionColor ? 'notClickedBtn' : 'clickedBtn';
    console.log('첫날짜', this.state.startDate);
    console.log('두번째', this.state.endDate);
    console.log('modal', this.state.isReviewModalOn);
    return (
      <div className="OrderHistory">
        <h1>주문목록/배송조회</h1>
        <section>
          <span>조회기간</span>
          <div className="buttonContainer">
            <button
              className={optionBtn}
              onClick={this.btnHandler}
              value="오늘"
            >
              오늘
            </button>
            <button className={optionBtn} onClick={this.btnHandler} value="7일">
              7일
            </button>
            <button
              className={optionBtn}
              onClick={this.btnHandler}
              value="15일"
            >
              15일
            </button>
            <button
              className={optionBtn}
              onClick={this.handleBtnClicked}
              value="1개월"
            >
              1개월
            </button>
            <button
              className={optionBtn}
              onClick={this.handleBtnClicked}
              value="3개월"
            >
              3개월
            </button>
            <button
              className={optionBtn}
              onClick={this.handleBtnClicked}
              value="1년"
            >
              1년
            </button>
          </div>
          <div className="calendarContainer">
            <div className="calendarWrapper">
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleStartChange}
                name="startDate"
                dateFormat="MM/dd/yyyy"
              />
              <i className="far fa-calendar-alt" />
            </div>
            <span className="calendarConnect">~</span>
            <div className="calendarWrapper">
              <DatePicker
                selected={this.state.endDate}
                onChange={this.handleEndChange}
                name="endDate"
                dateFormat="MM/dd/yyyy"
              />
              <i className="far fa-calendar-alt" />
            </div>
          </div>
          <div className="searchContainer">
            <button className="searchHistory">조회</button>
            <i className="fas fa-search" />
          </div>
        </section>
        <OrderListContainer writeReview={this.writeReview} />
        {this.state.isReviewModalOn && <Modal writeReview={this.writeReview} />}
      </div>
    );
  }
}

export default OrderHistory;
