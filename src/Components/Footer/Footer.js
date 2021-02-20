import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <img
          alt="footerlogo"
          src={process.env.PUBLIC_URL + '/images/footer/footerlogo.png'}
        />
        <div className="textContainer">
          <div className="textMenu">
            <a href="#0"> 공지사항 </a>
            <a href="#0"> 1:1문의 </a>
            <a href="#0"> 이용약관 </a>
            <a href="#0"> 개인정보처리방침 </a>
            <a href="#0"> 판매처 안내 </a>
          </div>
          <div className="textInfo">
            <p>
              상호 : (주)이백의민족: 김연주 서유진 송빈호 이미경 장성준
              정희영(PM) 통신판매업신고번호 : 2021-서울강남선릉위워크2호점
              [사업자정보확인]
            </p>
            <p>
              대표번호 : 1234-5678 이백문방구 고객센터(1234-5678) 운영시간 :
              월-금 10:00~10:00(주말•공휴일 휴무)
            </p>
            <p>
              팩스번호 : 1234-5678 메일 : 200_store@wecode.com 이백문방구
              인스타그램 : @200_store
            </p>
            <p>주소 : 서울시 강남구 위코드로 백앤드동 프론트앤드호</p>
            <p>© 200 Brothers Corp. All right Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
