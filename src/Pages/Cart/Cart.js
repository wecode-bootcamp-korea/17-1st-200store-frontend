import React, { Component } from 'react';
import CartItem from './Components/CartItem/CartItem';
import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      allChecked: false,
      itemChecked: true,
      cartList: [],
      checkList: [],
    };
  }
  componentDidMount() {
    fetch('data/cartListData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          cartList: res,
        });
      });
  }

  handleIncrement = item => {
    console.log('올라가닝...');
    const cartList = [...this.state.cartList];
    const index = cartList.indexOf(item);
    cartList[index].quantity++;
    this.setState({ cartList: cartList });
  };

  handleDecrement = item => {
    console.log('좀 내려가봐...');
    const cartList = [...this.state.cartList];
    const index = cartList.indexOf(item);
    const quantity = cartList[index].quantity - 1;
    cartList[index].quantity = quantity < 0 ? 0 : quantity;
    this.setState({ cartList: cartList });
  };

  handleChange = e => {
    const id = e.target.id;
    this.setState(prevState => {
      return {
        cartList: prevState.cartList.map(li =>
          li.id === +id ? { ...li, value: !li.value } : li
        ),
      };
    });
  };

  handleDelete = () => {
    this.setState(prevState => {
      return {
        cartList: prevState.cartList.filter(li => !li.value),
      };
    });
  };

  //   handleSum = form => {
  //     let sum = 0;
  //     let count = form.chkbox.length;
  //     for (let i = 0; i < count; i++) {
  //       if (form.cartItem[i].checked === true) {
  //         sum += parseInt(form.chkbox[i].value);
  //       }
  //     }
  //     form.total = sum;
  //   };

  //   handleChange = e => {
  //     let itemName = e.target.name;
  //     let checked = e.target.checked;
  //     this.setState(prevState => {
  //       let { cartList, allChecked } = prevState;
  //       if (itemName === 'checkAll') {
  //         allChecked = checked;
  //         cartList = cartList.map(item => ({ ...item, isChecked: checked }));
  //       } else {
  //         cartList = cartList.map(item =>
  //           item.name === itemName ? { ...item, isChecked: checked } : item
  //         );
  //         allChecked = cartList.every(item => item.isChecked);
  //       }
  //       return { cartList, allChecked };
  //     });
  //   };

  render() {
    console.log('>>>>>>>>렌더<<<<<<<<');
    console.log('전체선택', this.state.allChecked);
    // const cartQty = this.state.cartList.length;
    console.log('카트에 담겼니...', this.state.cartList);
    console.log('가격 계산해줘..');
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
                <th>
                  <input
                    type="checkbox"
                    name="checkAll"
                    checked={this.state.allChecked}
                    onChange={this.handleChange}
                  />
                </th>
                <th className="productInfo">상품/옵션 정보</th>
                <th className="productQty">수량</th>
                <th className="productPrice">상품금액</th>
                <th className="deliveryFee">배송비</th>
              </tr>
            </thead>
            <tbody className="cartItemContainer">
              {this.state.cartList.map(item => {
                return (
                  <CartItem
                    cartItem={item}
                    key={item.id}
                    id={item.id}
                    imgSrc={item.imgSrc}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
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
            <button className="selectItemDelete" onClick={this.handleDelete}>
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
