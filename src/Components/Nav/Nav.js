import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { NAVDATA } from './navData';
import './Nav.scss';
import { TRUE } from 'node-sass';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      navScrolled: false,
      menuList: [],
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      menuList: NAVDATA,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ navScrolled: window.pageYOffset > 100 });
  };

  goToLogin = () => {
    this.props.history.push('/login');
  };
  goToSignup = () => {
    this.props.history.push('/signup');
  };
  goToMyPage = () => {
    this.props.history.push('/mypage');
  };
  goToCart = () => {
    this.props.history.push('/cart');
  };

  render() {
    const { navScrolled, menuList } = this.state;
    return (
      <nav>
        {!navScrolled && (
          <main className="mainNav">
            <header>
              <ul>
                <li onClick={this.goToLogin}>로그인</li>
                <li onClick={this.goToSignup}>회원가입</li>
                <li onClick={this.goToMyPage}>마이페이지</li>
                <li onClick={this.goToCart}>장바구니</li>
              </ul>
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
            <ul>
              <li onClick={this.goToLogin}>로그인</li>
              <li onClick={this.goToSignup}>회원가입</li>
              <li onClick={this.goToMyPage}>마이페이지</li>
              <li onClick={this.goToCart}>장바구니</li>
            </ul>
          </div>
        )}
        <ul className="menuContainer">
          {menuList.map((menu, idx) => {
            return <li key={idx}>{menu.title}</li>;
          })}
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);
