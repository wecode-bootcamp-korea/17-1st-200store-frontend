import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <img
          alt="footerlogo"
          src={process.env.PUBLIC_URL + '/images/logo/footerlogo.png'}
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
              상호 : (주)우아한형제들 대표 : 김범준 사업자등록번호 :
              120-87-65763 통신판매업신고번호 : 2012-서울송파-0515
              [사업자정보확인]
            </p>
            <p>
              대표번호 : 1670-9902 배민문방구 고객센터(1670-9902) 운영시간 :
              월-금 13:00~18:00(주말•공휴일 휴무)
            </p>
            <p>
              팩스번호 : 050-605-0041 메일 : baemin_store@woowahan.com
              배민문방구 인스타그램 : @baemin_store
            </p>
            <p>
              주소 : 서울특별시 송파구 위례성대로 2 장은빌딩 호스팅제공 :
              엔에이치엔고도(주)
            </p>
            <p>© Woowa Brothers Corp. All right Reserved</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
