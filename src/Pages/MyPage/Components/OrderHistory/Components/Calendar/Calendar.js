import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import './Calendar.scss';

class Calendar extends Component {
  render() {
    const {
      handleBtnClicked,
      startDate,
      handleStartChange,
      endDate,
      handleEndChange,
    } = this.props;
    return (
      <section className="Calendar">
        <span>조회기간</span>
        <div className="buttonContainer">
          <button className="optionBtn" onClick={handleBtnClicked} value="오늘">
            오늘
          </button>
          <button className="optionBtn" onClick={handleBtnClicked} value="7일">
            7일
          </button>
          <button className="optionBtn" onClick={handleBtnClicked} value="15일">
            15일
          </button>
          <button
            className="optionBtn"
            onClick={handleBtnClicked}
            value="1개월"
          >
            1개월
          </button>
          <button
            className="optionBtn"
            onClick={handleBtnClicked}
            value="3개월"
          >
            3개월
          </button>
          <button className="optionBtn" onClick={handleBtnClicked} value="1년">
            1년
          </button>
        </div>
        <div className="calendarContainer">
          <div className="calendarWrapper">
            <DatePicker
              selected={startDate}
              onChange={handleStartChange}
              name="startDate"
              dateFormat="MM/dd/yyyy"
            />
            <i className="far fa-calendar-alt" />
          </div>
          <span className="calendarConnect">~</span>
          <div className="calendarWrapper">
            <DatePicker
              selected={endDate}
              onChange={handleEndChange}
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
    );
  }
}

export default Calendar;
