import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navScrolled: false,
      menuList: [
        { id: 1, src: '#0', title: '전체' },
        { id: 2, src: '#0', title: '문구' },
        { id: 3, src: '#0', title: '리빙' },
        { id: 4, src: '#0', title: '책' },
        { id: 5, src: '#0', title: '을지로에디션' },
        { id: 6, src: '#0', title: 'ㅋㅋ에디션' },
        { id: 7, src: '#0', title: '배달이친구들' },
        { id: 8, src: '#0', title: '선물세트' },
        { id: 9, src: '#0', title: '콜라보레이션' },
      ],
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    window.pageYOffset > 200
      ? this.setState({ navScrolled: true })
      : this.setState({ navScrolled: false });
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
          {this.state.menuList.map(menu => {
            return <a href="#0">{menu.title}</a>;
          })}
        </ul>
      </div>
    );
  }
}

export default Nav;
