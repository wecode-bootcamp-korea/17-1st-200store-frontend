import React, { Component } from 'react';
import Product from './Components/Product';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  // handleClick = e => {
  //   if (e.target.classList[1] === 'clicked') {
  //     e.target.classList.remove('click');
  //   } else {
  //     for
  //   }
  // };

  changeColor = () => {};
  componentDidMount() {
    fetch('/ProductListData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          productList: res,
        });
      });
  }

  // onclick = () => {
  //   fetch('')
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         productList: res.best,
  //         productList: res.new,
  //       });
  //     });
  // };

  // handleColor = () => {
  //   this.setState({
  //     return,
  //   });
  // };
  render() {
    const { productList } = this.state;
    return (
      <>
        <div className="Container">
          <div className="pickListnum">
            <p>
              총 <span>200개</span>
            </p>
            <div className="pickListBox">
              <p onClick={this.handleColor}>추천순</p>
              <p>인기순</p>
              <p>최신순</p>
              <p>낮은가격순</p>
              <p>높은가격순</p>
            </div>
          </div>
          <div className="product">
            <div className="productContainer">
              {productList.map(item => {
                return (
                  <Product
                    key={item.id}
                    price={item.price}
                    name={item.name}
                    imgSrc={item.imgSrc}
                    isBest={item.isBest}
                    isNew={item.isNew}
                    isSale={item.isSale}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
