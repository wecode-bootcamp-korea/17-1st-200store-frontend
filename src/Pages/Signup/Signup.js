import React from 'react';
import { Link } from 'react-router-dom';
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
      addr1: '',
      addr2: '',
      addr3: '',
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
    // console.log(this.state);
    // const isValid =
    //   this.state.id.length > 0 &&
    //   this.state.pw.length > 0 &&
    //   this.state.pwcheck.length > 0 &&
    //   this.state.pw === this.state.pwcheck &&
    //   this.state.name.length > 0 &&
    //   this.state.email.includes('@') &&
    //   this.state.add1.length > 0 &&
    //   this.state.add2.length > 0 &&
    //   this.state.add3.length > 0;

    // console.log('isValid >>> ', isValid);

    if (
      this.state.id.length > 0 &&
      this.state.pw.length > 0 &&
      this.state.pwcheck.length > 0 &&
      this.state.pw === this.state.pwcheck &&
      this.state.name.length > 0 &&
      this.state.email.includes('@') &&
      this.state.phone.length > 0 &&
      this.state.addr1.length > 0
      // this.state.addr2.length > 0 &&
      // this.state.addr3.length > 0
    ) {
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
                            // onChange={this.signupEnable}
                            onKeyUp={this.handleSignUpButton}
                            type="text"
                            id="memId"
                            name="id"
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
                            id="mempw"
                            name="pw"
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
                            id="mempwcheck"
                            name="pwcheck"
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
                            id="memname"
                            name="name"
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
                            id="mememail"
                            name="email"
                          />
                          <form>
                            <select name="selectbox">
                              <option value="1" selected>
                                직접입력
                              </option>
                              <option value="2">naver.com</option>
                              <option value="3">hanmail.net</option>
                              <option value="4">daum.net</option>
                              <option value="5">nate.com</option>
                              <option value="6">hotmail.com</option>
                              <option value="7">gmail.com</option>
                              <option value="8">Icould.com</option>
                            </select>
                          </form>
                          <div className="formElement">
                            <input
                              id="checkid"
                              type="checkbox"
                              className="checkbox"
                            />
                            <label for="checkid">
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
                            id="memphone"
                            name="phone"
                          />
                          <div className="formElement">
                            <input
                              id="checkid2"
                              type="checkbox"
                              className="checkbox"
                            />
                            <label for="checkid2">
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
                            id="memadd"
                            name="addr1"
                          />
                          <button
                            type="button"
                            id="btnPostcode"
                            className="btn_post_search"
                          >
                            우편번호검색
                          </button>
                          <br />
                          <input
                            onKeyUp={this.handleSignUpButton}
                            type="text"
                            id="memadd2"
                            name="addr2"
                          />
                          <br />
                          <input
                            onKeyUp={this.handleSignUpButton}
                            type="text"
                            id="memadd3"
                            name="addr3"
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
  }
}

export default Signup;
