import React, { Component } from 'react';
import CartItem from './Components/CartItem/CartItem';
import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }
  componentDidMount() {
    fetch('CartData/cartListData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          cartList: res,
        });
      });
  }

  deleteCartItem = id => {
    const remainedCartList = this.state.cartList.filter(item => {
      return id !== item.id;
    });

    this.setState({ cartList: remainedCartList });
  };

  render() {
    console.log(this.state.cartList);
    return (
      <div className="Cart">
        <div className="cartTitleContainer">
          <h1>장바구니</h1>
          <ul>
            <li>01 장바구니</li>
            <i id="currentSection" class="fas fa-chevron-right" />
            <li>02 주문서작성/결제</li>
            <i class="fas fa-chevron-right" />
            <li>03 주문완료</li>
          </ul>
        </div>
        <table>
          <thead>
            <tr className="headRow">
              <th>
                <input type="checkbox" />
              </th>
              <th className="productInfo">상품/옵션 정보</th>
              <th className="productQty">수량</th>
              <th className="productPrice">상품금액</th>
              <th className="deliveryFee">배송비</th>
            </tr>
          </thead>
          <tbody className="cartItemContainer">
            {this.state.cartList.map(item => {
              return <CartItem key={item.id} item={item} />;
            })}
          </tbody>
        </table>
        <p className="continueShop">
          <i class="fas fa-chevron-left" />
          쇼핑 계속하기
        </p>
        <section>
          <div className="productPrice">
            <p>
              총<strong>2</strong>개의 상품금액
            </p>
            <p>
              <strong>36,000</strong>원
            </p>
          </div>
          <i class="fas fa-plus-circle" />
          <div className="deliveryFee">
            <p>배송비</p>
            <p>
              <strong>0</strong>원
            </p>
          </div>
          <i class="fas fa-equals" />
          <div className="totalPrice">
            <p>합계</p>
            <p>
              <strong className="totalColor">36,000</strong>원
            </p>
          </div>
        </section>
        <div className="buttonContainer">
          <div className="leftButtonContainer">
            <button className="selectItemDelete" onClick={this.deleteCartItem}>
              선택 상품 삭제
            </button>
            <button className="selectItemWish">선택 상품 찜</button>
          </div>
          <div className="rightButtonContainer">
            <button className="selectItemOrder">선택 상품 주문</button>
            <button className="allItemOrder">전체 상품 주문</button>
          </div>
        </div>
        <span>주문서 작성단계에서 할인/적립금 적용을 하실 수 있습니다.</span>
      </div>
    );
  }
}

export default Cart;
