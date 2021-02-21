import React, { Component } from 'react';
import './Login.scss';
import { LoginApi } from '../../config';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = { id: '', pw: '' };
  }

  goToMain = () => {
    this.props.history.push('/');
  };

  handleInput = e => {
    const { value } = e.target;
    this.setState({
      [e.target.name]: value,
    });
  };

  // isPwstatus = pw => {};

  // onpwCheck = () => {
  //   if (!this.isPwstatus(this.state.pw)) {
  //     this.setState({
  //       pwError: '비밀번호를 다시 입력해주세요',
  //     });
  //   } else {
  //     this.setState({
  //       pwError: '',
  //     });
  //   }
  // };

  handleClick = e => {
    this.state.id.length >= 5 && this.state.pw.length >= 8
      ? this.goToMain()
      : alert('로그인실패');
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      if (this.state.id.length >= 5 && this.state.pw.length >= 8) {
        fetch(LoginApi, {
          method: 'POST',
          body: JSON.stringify({
            user_id: this.state.id,
            user_password: this.state.pw,
          }),
        })
          .then(res => res.json())
          .then(res => this.loginCheck(res));
      }
    }
  };

  loginCheck = res => {
    if (res.message === 'SUCCESS') {
      localStorage.setItem('ACCESS_TOKEN', res.TOKEN);
      this.goToMain();
    } else {
      alert('로그인에 실패했습니다!');
    }
  };

  render() {
    return (
      <div>
        <div className="loginContainer">
          <div className="contentBox">
            <div className="memberCont">
              <div className="loginBox">
                <h3 className="join">회원 로그인</h3>
                <div className="loginInputSec" onKeyUp={this.handleKeyPress}>
                  <input
                    className="loginId"
                    placeholder="아이디"
                    type="text"
                    name="id"
                    onChange={this.handleInput}
                  />
                  <input
                    className="loginPw"
                    placeholder="비밀번호"
                    type="password"
                    name="pw"
                    onChange={this.handleInput}
                    onKeyUp={this.onpwCheck}
                  />
                  {
                    <div className="errorMessage">
                      {this.state.passwordError}
                    </div>
                  }
                </div>
                <div className="idChk">
                  <input type="checkBox" className="saveid" />
                  <lavel for="saveId">아이디저장</lavel>
                </div>
                <button type="submit" onClick={this.handleClick}>
                  로그인
                </button>
              </div>
              <div className="snslogin"> 페이스북으로 로그인</div>
              <div className="btnLoginBox">
                <button className="btnJoin">회원가입</button>
                <button className="btnId">아이디 찾기</button>
                <button className="btnPw">비밀번호 찾기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
