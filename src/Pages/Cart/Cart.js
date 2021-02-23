import React, { Component } from 'react';
import CartList from './Components/CartList/CartList';
import CartPrice from './Components/CartPrice/CartPrice';
import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      checkList: [],
    };
  }

  //backend와 통신할때는 cartList: res.result
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
    const cartList = [...this.state.cartList];
    const index = cartList.indexOf(item);
    cartList[index].quantity++;
    this.setState({ cartList });
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
    this.setState(prevState => ({
      cartList: prevState.cartList.map(item =>
        item.productId === +id ? { ...item, value: e.target.checked } : item
      ),
    }));
  };

  handleDelete = e => {
    this.setState(prevState => ({
      cartList: prevState.cartList.filter(item => !item.value),
    }));
  };

  sendCheckedList = () => {
    this.setState(prevState => ({
      checkList: prevState.cartList.filter(item => item.value),
    }));
  };

  sendAllList = () => {
    this.setState({
      cartList: this.state.cartList,
    });
  };

  handleAllChecked = e => {
    let cartList = this.state.cartList;
    cartList.forEach(item => (item.value = e.target.checked));
    this.setState({ cartList });
  };

  render() {
    const { cartList } = this.state;
    const {
      handleAllChecked,
      handleIncrement,
      handleDecrement,
      handleChange,
      handleDelete,
      sendCheckedList,
      sendAllList,
    } = this;
    const selectedItems = cartList.filter(item => item.value);
    const sumPrice = Math.floor(
      selectedItems.reduce(
        (acc, item) => acc + item.totalPrice * item.quantity,
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
            <i id="currentSection" className="fas fa-chevron-right" />
            <li>02 주문서작성/결제</li>
            <i className="fas fa-chevron-right" />
            <li>03 주문완료</li>
          </ul>
        </div>
        {!cartList.length && (
          <div className="emptyCartWrapper">
            <p className="emptyCart">장바구니에 담겨있는 상품이 없습니다.</p>
          </div>
        )}
        {cartList.length > 0 && (
          <CartList
            cartList={cartList}
            handleAllChecked={handleAllChecked}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onChecked={handleChange}
          />
        )}
        <p className="continueShop">
          <i className="fas fa-chevron-left" />
          쇼핑 계속하기
        </p>
        <CartPrice
          cartList={cartList}
          selectedItems={selectedItems}
          sumPrice={sumPrice}
          deliveryFee={deliveryFee}
          totalPrice={totalPrice}
        />
        <div className="buttonContainer">
          <div className="leftButtonContainer">
            <button className="selectItemDelete" onClick={handleDelete}>
              선택 상품 삭제
            </button>
            <button className="selectItemWish">선택 상품 찜</button>
          </div>
          <div className="rightButtonContainer">
            <button className="selectItemOrder" onClick={sendCheckedList}>
              선택 상품 주문
            </button>
            <button className="allItemOrder" onClick={sendAllList}>
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
