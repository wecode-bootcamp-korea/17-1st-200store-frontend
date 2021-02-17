import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  render() {
    return (
      <div className="contents">
        <div className="sub_content">
          <div className="item_photo_info_sec">
            <div className="item_photo_view_box">
              <div className="item_photo_big">
                <img
                  src="https://images.unsplash.com/photo-1588947618741-2250fc97321a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80"
                  width="473px"
                  height="586px"
                  alt="ㅋㅋ안 보이는 양말 세트"
                  className="middle"
                ></img>
              </div>
            </div>
            <div className="item_info_box">
              <div className="item_detail_cont">
                <div className="item_detail">
                  <h3>ㅋㅋ안 보이는 양말 세트</h3>
                </div>
                <div className="item_detail_list">
                  <dl>
                    <dt>정가</dt>
                    <dd>
                      <del>
                        <span>20,000원</span>
                      </del>
                    </dd>
                  </dl>
                  <dl className="item_price">
                    <dt>판매가격</dt>
                    <dd>
                      <strong>19,000원</strong>
                    </dd>
                  </dl>
                  <dl className="item_delivery">
                    {' '}
                    <dt>배송정보</dt>
                    <dd>
                      <strong>2,500원</strong>
                      <p className="delivery_fee_free">
                        (3만원 이상 구매시 무료)
                      </p>
                      <p className="limit_time">오후 2시 당일배송마감</p>
                    </dd>
                  </dl>
                </div>
                <div className="option_display_area_wrap"></div>
                <table
                  className="option_display_Area"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tbody id="option_display_item">
                    <tr class="check_option">
                      <td class="cart_prdt_name">
                        <span>ㅋㅋ안 보이는 양말 세트</span>
                      </td>
                      <td>
                        <input
                          type="number"
                          name="goodsCnt"
                          class="text_goodsCnt"
                          title="수량"
                        ></input>
                      </td>
                      <td className="item_choice_price">
                        <strong className="option_price_Display_0">
                          64,000원
                        </strong>
                      </td>
                      <td className="item_delete"></td>
                    </tr>
                  </tbody>
                </table>
                <hr className="hairline"></hr>

                <dl class="total_amoutn">
                  <dt>총 합계금액</dt>
                  <dd>
                    <strong className="total_price">
                      13,500<b>원</b>
                    </strong>
                  </dd>
                </dl>
                <div className="btn_choice_box">
                  <button id="wishBtn" type="button" class="btn_addwish">
                    ♡
                  </button>
                  <button id="cartNtn" type="button" class="btn_add_cart">
                    장바구니
                  </button>
                  <button type="button" class="btn_add_order">
                    바로 구매
                  </button>
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
