<<<<<<< HEAD
import React from 'react';
import './Signup.scss';
import '../../config';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      pwcheck: '',
      name: '',
      email: '',
      phone: '',
      numb: '',
      address1: '',
      address2: '',
      address3: '',
      isSignup: true,
    };
  }

  handleSignUpButton = e => {
    const { value, name } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.signupEnable()
    );
  };

  signupEnable = () => {
    const { id, pw, pwcheck, name, email, phone, address1 } = this.state;
    const btnCondition =
      id.length &&
      pw.length &&
      pwcheck.length &&
      name.length &&
      email.length &&
      phone.length &&
      address1.length &&
      email.includes('@') &&
      pw === pwcheck;

    if (btnCondition) {
      this.setState({ isSignup: false });
    }
  };

  goToMain = () => {
    fetch('SIGN_UP_API', {
      method: 'POST',
      body: JSON.stringify({
        user_id: this.state.id,
        user_password: this.state.pw,
        user_name: this.state.name,
        email: this.state.email,
        cell_phone: this.state.phone,
        address: this.state.add1,
      }),
    })
      .then(response => response.json())
      .then(result =>
        result.message === 'SUCCESS'
          ? this.props.history.push('/')
          : alert('회원가입 실패')
      );
  };

  render() {
    return (
      <div className="topContents">
        <div className="memberInfo">
          <ol>
            <li>
              <span>01 약관동의 > </span>
            </li>
            <li className="secondLi">
              <span>02 정보입력 > </span>
            </li>
            <li>
              <span>03 가입완료 </span>
            </li>
          </ol>
        </div>
        <div className="contents">
          <div className="memberCont">
            <div className="baseInfobox">
              <div className="infoContainer">
                <div>
                  <h3>기본정보</h3>
                </div>
                <div>
                  <span className="importantItem">
                    • 표시는 반드시 입력하셔야 하는 항목입니다.
                  </span>
                </div>
              </div>
              <div className="baseInfoSec">
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <span className="important">• 아이디</span>
                      </th>
                      <td>
                        <div className="memberWarning">
                          <input
                            onKeyUp={this.handleSignUpButton}
                            type="text"
                            name="id"
                            className="memberinput"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span className="important">• 비밀번호</span>
                      </th>
                      <td>
                        <div className="memberWarning">
                          <input
                            onKeyUp={this.handleSignUpButton}
                            type="password"
                            name="pw"
                            className="memberInputShort"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span className="important">• 비밀번호 확인</span>
                      </th>
                      <td>
                        <div className="member_warning">
                          <input
                            onKeyUp={this.handleSignUpButton}
                            type="password"
                            name="pwcheck"
                            className="memberInputShort"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span className="important">• 이름</span>
                      </th>
                      <td>
                        <div className="memberWarning">
                          <input
                            onKeyUp={this.handleSignUpButton}
                            type="text"
                            name="name"
                            className="memberinput"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span className="important">• 이메일</span>
                      </th>
                      <td>
                        <div className="memberWarning">
                          <input
                            onKeyUp={this.handleSignUpButton}
                            type="email"
                            name="email"
                            className="memberEmail"
                          />
                          <form>
                            <select name="selectbox">
                              <option value="select" selected>
                                직접입력
                              </option>
                              <option value="naver">naver.com</option>
                              <option value="hanmail">hanmail.net</option>
                              <option value="daum">daum.net</option>
                              <option value="nate">nate.com</option>
                              <option value="hotmail">hotmail.com</option>
                              <option value="gmail">gmail.com</option>
                              <option value="icloud">Icould.com</option>
                            </select>
                          </form>
                          <div className="formElement">
                            <label>
                              <input type="checkbox" className="checkbox" />
                              (선택) 마케팅 및 이벤트 정보 메일 수신에
                              동의합니다.
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span className="important">• 휴대폰번호</span>
                      </th>
                      <td>
                        <div className="memberWarning">
                          <input
                            onKeyUp={this.handleSignUpButton}
                            type="text"
                            name="phone"
                            className="memberInputShort"
                          />
                          <div className="formElement">
                            <label>
                              <input type="checkbox" className="checkbox" />
                              (선택) 마케팅 및 이벤트 정보 SMS 수신에
                              동의합니다.
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span className="important">&nbsp;&nbsp;전화번호</span>
                      </th>
                      <td>
                        <div className="memberWarning">
                          <input
                            type="text"
                            id="memnum"
                            placeholder="- 없이 입력하세요."
                            name="numb"
                            className="memberinput"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <span className="important">• 주소</span>
                      </th>
                      <td className="last_td">
                        <div className="memberWarning">
                          <input
                            onKeyUp={this.handleSignUpButton}
                            type="text"
                            name="address1"
                            className="memberInputShort"
                          />
                          <button type="button" className="btnPostSearch">
                            우편번호검색
                          </button>
                          <br />
                          <input
                            onKeyUp={this.handleSignUpButton}
                            type="text"
                            name="address2"
                            className="memberinput memberaddlong"
                          />
                          <br />
                          <input
                            onKeyUp={this.handleSignUpButton}
                            type="text"
                            id="memadd3"
                            name="address3"
                            className="memberinput memberaddlong"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="btnCenterBox">
              <button type="button" className="btnMemberCancel">
                취소
              </button>
              <button
                disabled={this.state.isSignup}
                onClick={this.goToMain}
                className="btnComfirmjsBtnjoin"
                type="button"
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    );
=======
import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return <div></div>;
>>>>>>> master
  }
}

export default Signup;
