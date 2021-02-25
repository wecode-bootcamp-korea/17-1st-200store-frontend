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
    // fetch(`http://10.58.2.240:8000/product?category=${id}`)
    //   .then(res => res.json())
    //   .then(res => {
    //     // console.log(res.data.products);
    //     this.setState({
    //       productList: res.data.products,
    //     });
    //   });
  };

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
    const { navScrolled, navList } = this.state;
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
