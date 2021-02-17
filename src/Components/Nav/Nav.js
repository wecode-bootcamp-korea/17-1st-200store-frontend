import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navScrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 200) {
      if (!this.state.navScrolled) {
        this.setState({ navScrolled: true });
      }
    } else {
      if (this.state.navScrolled) {
        this.setState({ navScrolled: false });
      }
    }
  };

  render() {
    return (
      <div className="Nav">
        {!this.state.navScrolled && (
          <main className="mainNav">
            <header>
              <ul>
                <a href="/login">로그인</a>
                <a href="/signup">회원가입</a>
                <a href="/mypage">마이페이지</a>
                <a href="/cart">장바구니</a>
              </ul>
            </header>
            <div className="logoContainer">
              <Link to="/">
                <img
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/logo/logo.png'}
                />
              </Link>
              <div className="searchContainer">
                <input
                  className="searchInput"
                  name="search"
                  type="text"
                  placeholder="검색어를 입력해주세요"
                />
                <i class="fas fa-search" />
              </div>
            </div>
          </main>
        )}
        {this.state.navScrolled && (
          <div className="subNav">
            <div className="logoContainer">
              <Link to="/">
                <img
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/logo/logo.png'}
                />
              </Link>
            </div>

            <ul>
              <a href="/login">로그인</a>
              <a href="/signup">회원가입</a>
              <a href="/mypage">마이페이지</a>
              <a href="/cart">장바구니</a>
            </ul>
          </div>
        )}
        <ul className="menuContainer">
          <a href="#0"> 전체 </a>
          <a href="#0"> 문구 </a>
          <a href="#0"> 리빙 </a>
          <a href="#0"> 책 </a>
          <a href="#0"> 을지로에디션 </a>
          <a href="#0"> ㅋㅋ에디션 </a>
          <a href="#0"> 배달이친구들 </a>
          <a href="#0"> 선물세트 </a>
          <a href="#0"> 콜라보레이션 </a>
        </ul>
      </div>
    );
  }
}

export default Nav;
