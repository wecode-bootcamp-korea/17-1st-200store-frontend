import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { NAVDATA } from './navData';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navScrolled: false,
      navList: [],
      productList: [],
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      navList: NAVDATA,
    });
  }

  menuChange = id => {
    this.props.history.push(`/product?category=${id}`);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ navScrolled: window.pageYOffset > 0 });
  };

  goToLogin = () => {
    this.props.history.push('/login');
  };
  goToSignup = () => {
    this.props.history.push('/signup');
  };
  goToMyPage = () => {
    if (localStorage.getItem('accessToken')) {
      this.props.history.push('/mypage');
    } else {
      alert('로그인을 해주세요');
      this.props.history.push('/login');
    }
  };
  goToCart = () => {
    if (localStorage.getItem('accessToken')) {
      this.props.history.push('/cart');
    } else {
      alert('로그인을 해주세요');
      this.props.history.push('/login');
    }
  };
  goToLogOut = () => {
    alert('로그아웃 되었습니다');
    localStorage.removeItem('accessToken');
    this.props.history.push('/');
  };

  render() {
    const { navScrolled, navList } = this.state;
    return (
      <nav>
        {!navScrolled && (
          <main className="mainNav">
            <header>
              {!localStorage.getItem('accessToken') && (
                <ul>
                  <li onClick={this.goToLogin}>로그인</li>
                  <li onClick={this.goToSignup}>회원가입</li>
                  <li onClick={this.goToMyPage}>마이페이지</li>
                  <li onClick={this.goToCart}>장바구니</li>
                </ul>
              )}
              {localStorage.getItem('accessToken') && (
                <ul>
                  <li onClick={this.goToLogOut}>로그아웃</li>
                  <li onClick={this.goToMyPage}>마이페이지</li>
                  <li onClick={this.goToCart}>장바구니</li>
                </ul>
              )}
            </header>
            <div className="logoContainer">
              <Link to="/">
                <img
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/nav/logo.png'}
                />
              </Link>
              <div className="searchContainer">
                <input
                  className="searchInput"
                  name="search"
                  type="text"
                  placeholder="검색어를 입력해주세요"
                />
                <i className="fas fa-search" />
              </div>
            </div>
          </main>
        )}
        {navScrolled && (
          <div className="subNav">
            <div className="logoContainer">
              <Link to="/">
                <img
                  alt="logo"
                  src={process.env.PUBLIC_URL + '/images/nav/logo.png'}
                />
              </Link>
            </div>
            {!localStorage.getItem('accessToken') && (
              <ul>
                <li onClick={this.goToLogin}>로그인</li>
                <li onClick={this.goToSignup}>회원가입</li>
                <li onClick={this.goToMyPage}>마이페이지</li>
                <li onClick={this.goToCart}>장바구니</li>
              </ul>
            )}
            {localStorage.getItem('accessToken') && (
              <ul>
                <li onClick={this.goToLogOut}>로그아웃</li>
                <li onClick={this.goToMyPage}>마이페이지</li>
                <li onClick={this.goToCart}>장바구니</li>
              </ul>
            )}
          </div>
        )}
        <ul className="menuContainer">
          {navList.map((menu, idx) => {
            return (
              <li key={idx} onClick={() => this.menuChange(menu.title)}>
                {menu.title}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);
