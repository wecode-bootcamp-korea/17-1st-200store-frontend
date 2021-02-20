import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.scss';
import Reviews from './review';
import AdminMsg from './admin_msg';
import Itemgoodstab from './Itemgoodstab';
import Modal from './Modal';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      price: 19000,
      reviewList: [],
      isModalView: false,
      productView: [],
    };
  }

  handleModal = () => {
    console.log(!this.state.isModalView);
    this.setState({ isModalView: !this.state.isModalView });
  };

  componentDidMount() {
    fetch('/data/reviewdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewList: data,
        });
      });

    fetch('/data/productview.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productView: data,
        });
      });
  }

  countUp = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };

  countDown = () => {
    const { count } = this.state;
    this.setState({
      count: count === 0 ? count : count - 1,
    });
  };

  countZero = () => {
    const { count } = this.state;
    this.setState({
      count: 0,
    });
  };

  render() {
    const { price, count } = this.state;

    return (
      <div className="productDetail">
        <div className="contents">
          <div className="itemPhotoInfoSec">
            <div className="itemPhotoViewBox">
              <div className="itemPhotoBig">
                <img
                  src="https://images.unsplash.com/photo-1588947618741-2250fc97321a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80"
                  alt="ㅋㅋ안 보이는 양말 세트"
                  className="middle"
                />
              </div>
            </div>
            <div className="itemInfoBox">
              <div className="itemDetailCont">
                <div className="itemDetail">
                  <h3>ㅋㅋ보이는 연필 세트</h3>
                </div>
                <div className="itemDetailList">
                  <dl>
                    <dt>정가</dt>
                    <dd>
                      <del>
                        <span className="originalPrice">20,000원</span>
                      </del>
                    </dd>
                  </dl>
                  <dl className="itemPrice">
                    <dt>판매가격</dt>
                    <dd>
                      <strong>19,000원</strong>
                    </dd>
                  </dl>
                  <dl className="itemDelivery">
                    <dt>배송정보</dt>
                    <dd>
                      <p className="deliveryFeeFree">
                        2,500원 (3만원 이상 구매시 무료)
                      </p>
                      <p className="limitTime">오후 2시 당일배송마감</p>
                    </dd>
                  </dl>
                </div>
                <div className="optionDisplayAreaWrap" />
                <table className="optionDisplayArea">
                  <tbody id="optionDisplayItem">
                    <tr className="checkOption">
                      <td className="cartPrdtName">
                        <p className="productName">ㅋㅋ보이는 연필 세트</p>
                      </td>
                      <td className="prdtCount">
                        <div className="count">
                          <input
                            type="text"
                            value={count}
                            className="countBox"
                          />
                          <div className="countBtn">
                            <button
                              id="up"
                              className="upGoodsCnt"
                              onClick={this.countUp}
                            >
                              ∧
                            </button>
                            <button
                              id="down"
                              className="downGoodsCnt"
                              onClick={this.countDown}
                            >
                              ∨
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="itemChoicePrice">
                        <strong className="optionPriceDisplay">
                          {(count * price).toLocaleString()}
                        </strong>
                        원
                      </td>
                      <td className="itemDelete">
                        <button
                          id="del"
                          className="delGoodsCnt"
                          onClick={this.countZero}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr className="hairline" />

                <dl className="totalAmount">
                  <dt>총 합계금액</dt>
                  <dd className="totalPricedd">
                    <strong className="totalPrice">
                      {(count * price).toLocaleString()}
                      <b>원</b>
                    </strong>
                  </dd>
                </dl>
                <div className="btnChoiceBox">
                  <button id="wishBtn" type="button" class="btnAddwish">
                    <i class="far fa-heart" />
                  </button>
                  <button id="cartNtn" type="button" class="btnAddcart">
                    장바구니
                  </button>
                  <button type="button" class="btnAddorder">
                    바로 구매
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="detail">
            <Itemgoodstab />
            <div className="detailCont" id="detailInfo">
              <h3 className="mustInfo">상품상세정보</h3>
              <div className="detailExplainBox">
                <div className="detailPhotoBox" />
                <img
                  src="https://store.baemin.com/data/editor/goods/200724/002403c7fbbcfdb9dd0728c98239be01_154446.png"
                  alt="사진"
                />

                <div className="detailInfo">
                  <h3 className="mustInfo">상품필수정보</h3>
                  <table className="leftTableType">
                    <tbody>
                      <tr>
                        <th>품명</th>
                        <td colspan="3">을지로에서 만든 쟁반</td>
                      </tr>
                      <tr>
                        <th>재질</th>
                        <td colspan="3">스테인레스</td>
                      </tr>
                      <tr>
                        <th>구성품</th>
                        <td colspan="3">쟁반, 품질보증서</td>
                      </tr>
                      <tr>
                        <th>크기</th>
                        <td colspan="3">32.5x32.5cm</td>
                      </tr>
                      <tr>
                        <th>제조사</th>
                        <td colspan="3">(주)우아한형제들</td>
                      </tr>
                      <tr>
                        <th>제조국</th>
                        <td colspan="3">한국</td>
                      </tr>
                      <tr>
                        <th>식품위생법에 따른 수입신고</th>
                        <td colspan="3">해당없음</td>
                      </tr>
                      <tr>
                        <th>품질보증기준</th>
                        <td colspan="3">을지로에서 만든 쟁반</td>
                      </tr>
                      <tr>
                        <th>품명</th>
                        <td colspan="3">
                          관련 법 및 소비자 분쟁해결 규정에 따름
                        </td>
                      </tr>
                      <tr>
                        <th>A/S 책임자와 전화번호</th>
                        <td colspan="3">배민문방구 고객센터 1670-9902</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Itemgoodstab />
                <h3 className="info" id="delivery">
                  배송안내
                </h3>
                <div className="adminMsg">
                  <p>배송사:cj대한통운</p>
                  <p>배송비: 2,500원(3만원 이상 구매 시 무료배송)</p>
                  <p>도서, 산간 일부지역은 배송비가 추가될 수 있습니다.</p>
                  <p>
                    배송기간: 오후 2시 이전 결제완료시 당일 출고 (영업일 기준)
                  </p>
                  <p>
                    단, 상품의 재고 상황, 배송량, 배송 지역에 따라 배송일이
                    추가로 소요될 수 있는 점 양해 부탁드립니다.
                  </p>
                </div>
                <Itemgoodstab />
                <AdminMsg />
                <Itemgoodstab />
                <div className="productReview">
                  <div className="reviewBox">
                    <h3 id="review">
                      상품후기&nbsp;
                      <span class="reviewCount">
                        {this.state.reviewList.length}
                      </span>
                    </h3>

                    <button
                      className="btnReviewsWrite"
                      onClick={this.handleModal}
                    >
                      상품후기 글쓰기
                    </button>
                  </div>
                  {this.state.isModalView && (
                    <Modal handleModal={this.handleModal} />
                  )}
                  <Reviews reviewList={this.state.reviewList} />
                  <div className="page">
                    <ul>
                      <li className="on">
                        <span>1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
