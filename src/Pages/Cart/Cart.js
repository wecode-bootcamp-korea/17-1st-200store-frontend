import React, { Component } from 'react';
import CartItem from './Components/CartItem/CartItem';
import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      checkList: [],
      deliveryFee: 0,
    };
  }
  componentDidMount() {
    fetch('data/cartListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          cartList: res,
        });
      });
  }

  handleIncrement = item => {
    const cartList = [...this.state.cartList];
    const index = cartList.indexOf(item);
    cartList[index].quantity++;
    this.setState({ cartList: cartList });
  };

  handleDecrement = item => {
    const cartList = [...this.state.cartList];
    const index = cartList.indexOf(item);
    const quantity = cartList[index].quantity - 1;
    cartList[index].quantity = quantity < 0 ? 0 : quantity;
    this.setState(prevState => {
      return {
        cartList: prevState.cartList.filter(item => item.quantity > 0),
      };
    });
  };

  handleChange = e => {
    const id = e.target.id;
    this.setState(prevState => {
      return {
        cartList: prevState.cartList.map(item =>
          item.id === +id ? { ...item, value: !item.value } : item
        ),
      };
    });
  };

  handleDelete = () => {
    this.setState(prevState => {
      return {
        cartList: prevState.cartList.filter(item => !item.value),
      };
    });
  };

  sendCheckedList = () => {
    this.setState(prevState => {
      return {
        checkList: prevState.cartList.filter(item => item.value),
      };
    });
  };

  sendAllList = () => {
    this.setState({
      cartList: this.state.cartList,
    });
  };

  render() {
    const selectedItems = this.state.cartList.filter(item => item.value);
    const sumPrice = Math.floor(
      selectedItems.reduce(
        (acc, item) => acc + item.total_price * item.quantity,
        0
      )
    );
    const deliveryFee = sumPrice < 30000 ? 2500 : 0;
    const totalPrice = sumPrice + deliveryFee;
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
        <form>
          <table>
            <thead>
              <tr className="headRow">
                <th className="checkBoxAll">
                  <input type="checkbox" name="checkAll" />
                </th>
                <th className="productInfo">상품/옵션 정보</th>
                <th className="productQty">수량</th>
                <th className="productPrice">상품금액</th>
              </tr>
            </thead>
            <tbody className="cartItemContainer">
              {this.state.cartList.map(item => {
                return (
                  <CartItem
                    cartItem={item}
                    key={item.id}
                    id={item.id}
                    imgSrc={item.url_image}
                    name={item.product}
                    quantity={item.quantity}
                    price={item.total_price}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onChecked={this.handleChange}
                  />
                );
              })}
            </tbody>
          </table>
        </form>
        <p className="continueShop">
          <i class="fas fa-chevron-left" />
          쇼핑 계속하기
        </p>
        <section>
          <div className="productPrice">
            <p>
              총<strong>{selectedItems.length}</strong>개의 상품금액
            </p>
            <p>
              <strong>{sumPrice.toLocaleString()}</strong>원
            </p>
          </div>
          <i class="fas fa-plus-circle" />
          <div className="deliveryFee">
            <p>배송비</p>
            <p>
              <strong>{deliveryFee.toLocaleString()}</strong>원
            </p>
          </div>
          <i class="fas fa-equals" />
          <div className="totalPrice">
            <p>합계</p>
            <p>
              <strong className="totalColor">
                {totalPrice.toLocaleString()}
              </strong>
              원
            </p>
          </div>
        </section>
        <div className="buttonContainer">
          <div className="leftButtonContainer">
            <button className="selectItemDelete" onClick={this.handleDelete}>
              선택 상품 삭제
            </button>
            <button className="selectItemWish">선택 상품 찜</button>
          </div>
          <div className="rightButtonContainer">
            <button className="selectItemOrder" onClick={this.sendCheckedList}>
              선택 상품 주문
            </button>
            <button className="allItemOrder" onClick={this.sendAllList}>
              전체 상품 주문
            </button>
          </div>
        </div>
        <span>주문서 작성단계에서 할인/적립금 적용을 하실 수 있습니다.</span>
      </div>
    );
  }
}

export default Cart;
