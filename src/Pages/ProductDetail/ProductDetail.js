import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.scss';
import Reviews from './review';
import AdminMsg from './admin_msg';
import Itemgoodstab from './Itemgoodstab';
import ProductdetailTable from './productdetailtable';
import Modal from './Modal';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      isModalView: false,
      productDetail: [],
      productImage: [],
      productReview: [],
    };
  }

  handleModal = () => {
    console.log(!this.state.isModalView);
    this.setState({ isModalView: !this.state.isModalView });
  };

  componentDidMount() {
    // fetch('http://192.168.43.173:8000/product/goods_view/1', { method: 'GET' })
    fetch('/data/productdetaildata.json')
      .then(res => res.json())
      .then(data => {
        console.log('data받기', data.data);
        this.setState({
          productDetail: data.data.product,
          productImage: data.data.images,
          productReview: data.data.review,
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
    console.log('productDetail list', this.state.productDetail);
    const { count } = this.state;

    return (
      <div className="productDetail">
        <div className="contents">
          {this.state.productDetail.map(detail => {
            const finalPrice = (
              Math.round((detail.price * (1 - detail.sale)) / 100) * 100
            ).toLocaleString();
            return (
              <div className="itemPhotoInfoSec" id={detail.id}>
                <div className="itemPhotoViewBox">
                  <div className="itemPhotoBig">
                    <img
                      src={detail.imageUrl}
                      alt="ㅋㅋ안 보이는 양말 세트"
                      className="middle"
                    />
                  </div>
                </div>
                <div className="itemInfoBox">
                  <div className="itemDetailCont">
                    <div className="itemDetail">
                      <h3>{detail.name}</h3>
                    </div>
                    <div className="itemDetailList">
                      {detail.sale > 0 && detail.stock > 0 && (
                        <dl>
                          <dt>정가</dt>
                          <dd>
                            <del>
                              <span className="originalPrice">
                                {detail.price.toLocaleString()}원
                              </span>
                            </del>
                          </dd>
                        </dl>
                      )}
                      <dl className="itemPrice">
                        <dt>판매가격</dt>
                        <dd>
                          {!detail.stock && (
                            <strong className="soldOutPrice">품절</strong>
                          )}
                          {detail.stock > 0 && <strong>{finalPrice}원</strong>}
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
                      <tbody>
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
                                  className="upGoodsCnt"
                                  onClick={this.countUp}
                                >
                                  ∧
                                </button>
                                <button
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
                              {(count * detail.price).toLocaleString()}
                            </strong>
                            원
                          </td>
                          <td className="itemDelete">
                            <button
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
                          {(count * detail.price).toLocaleString()}
                          <b>원</b>
                        </strong>
                      </dd>
                    </dl>
                    <div className="btnChoiceBox">
                      <button type="button" class="btnAddwish">
                        <i class="far fa-heart" />
                      </button>
                      <button type="button" class="btnAddcart">
                        장바구니
                      </button>
                      {!detail.stock && (
                        <button type="button" className="soldOut" disabled>
                          SOLD OUT
                        </button>
                      )}
                      {detail.stock > 0 && (
                        <button type="button" class="btnAddorder">
                          바로 구매
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="detail">
            <Itemgoodstab />
            {this.state.productImage.map(image => {
              return (
                <div className="detailCont" id="detailInfo">
                  <h3 className="mustInfo">상품상세정보</h3>
                  <div className="detailExplainBox " id={image.id}>
                    <div className="detailPhotoBox" />
                    <img src={image.imageUrl} alt="사진" />
                    <div className="detailInfo">
                      <h3 className="mustInfo">상품필수정보</h3>
                      <ProductdetailTable />
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
                        배송기간: 오후 2시 이전 결제완료시 당일 출고 (영업일
                        기준)
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
                        <h3 className="review">
                          상품후기&nbsp;
                          <span className="reviewCount">
                            {this.state.productReview.length}
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
                      <Reviews reviewList={this.state.productReview} />
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
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
