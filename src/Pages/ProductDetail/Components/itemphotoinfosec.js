import React from 'react';

class ItemPhotoInfoSec extends React.Component {
  render() {
    const {
      count,
      countUp,
      countDown,
      countZero,
      goToHeart,
      goToCart,
      goToPayment,
      detail,
    } = this.props;
    const originalPrice = Math.floor(detail.price);
    const salePrice = (
      Math.round((detail.price * (1 - detail.sale)) / 100) * 100
    ).toLocaleString();
    const finalPrice = (
      Math.round((detail.price * (1 - detail.sale)) / 100) *
      100 *
      count
    ).toLocaleString();
    return (
      <>
        {/* {this.props.productDetail.map(detail => { */}
        <div className="itemPhotoInfoSec" id={detail.id}>
          <div className="itemPhotoViewBox">
            <div className="itemPhotoBig">
              <img
                src={detail.thumbnailUrl}
                alt="ㅋㅋ안 보이는 양말 세트"
                className="middle"
              />
            </div>
          </div>
          <div className="itemInfoBox">
            <div className="itemDetailCont">
              <div className="itemDetail">
                <h3 className="datailName">{detail.name}</h3>
              </div>
              <div className="itemDetailList">
                {detail.sale > 0 && detail.stock > 0 && (
                  <dl>
                    <dt>정가</dt>
                    <dd>
                      <del>
                        <span className="originalPrice">
                          {originalPrice.toLocaleString()}원
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
                    {detail.stock > 0 && <strong>{salePrice}원</strong>}
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
                        <input type="text" value={count} className="countBox" />
                        <div className="countBtn">
                          <button className="upGoodsCnt" onClick={countUp}>
                            ∧
                          </button>
                          <button className="downGoodsCnt" onClick={countDown}>
                            ∨
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="itemChoicePrice">
                      <strong className="optionPriceDisplay">
                        {finalPrice.toLocaleString()}
                      </strong>
                      원
                    </td>
                    <td className="itemDelete">
                      <button className="delGoodsCnt" onClick={countZero}>
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
                  <strong className="totalPrice2">
                    {finalPrice}
                    <b>원</b>
                  </strong>
                </dd>
              </dl>
              <div className="btnChoiceBox">
                <button
                  type="button"
                  className="btnAddwish"
                  onClick={goToHeart}
                >
                  <i class="far fa-heart" />
                </button>
                {!detail.stock && (
                  <button type="button" className="btnAddcartNone" disabled>
                    장바구니
                  </button>
                )}
                {detail.stock > 0 && (
                  <button
                    type="button"
                    className="btnAddcart"
                    onClick={goToCart}
                  >
                    장바구니
                  </button>
                )}
                {!detail.stock && (
                  <button type="button" className="soldOut" disabled>
                    SOLD OUT
                  </button>
                )}
                {detail.stock > 0 && (
                  <button
                    type="button"
                    class="btnAddorder"
                    onClick={goToPayment}
                  >
                    바로 구매
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ItemPhotoInfoSec;
