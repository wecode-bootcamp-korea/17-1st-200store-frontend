import React from 'react';
import './MyPageHeader.scss';

export default class MyPageHeader extends React.Component {
  render() {
    return (
      <div className="MyPageHeader">
        <div className="greetings">반가워요,</div>
        <div className="couponPointBox">
          <span className="marginRight">쿠폰</span>
          <span className="infoInt">{USER.coupon}</span>
          <span className="marginRight">장</span>
          <span className="marginRight">|</span>
          <span className="marginRight">적립금</span>
          <span className="infoInt">{USER.point.toLocaleString()}</span>
          <span className="marginRight">원</span>
        </div>
        <div className="userGradeBox">
          <p>{USER.name}님의</p>
          <p>
            회원등급은<span>{USER.grade}</span>입니다.
          </p>
        </div>
      </div>
    );
  }
}

const USER = {
  name: '장성준',
  grade: '일반회원그룹',
  coupon: 1,
  point: 3000,
};
