import { buildQueries, getQueriesForElement } from '@testing-library/react';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Product from './Components/Product';
import './ProductList.scss';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      selectedItem: '',
    };
  }

  // chang`eColor = () => {};

  componentDidMount() {
    fetch('/ProductListData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          productList: res,
        });
      });
  }

  getData = () => {
    fetch('/ProductList.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          productList: res,
        });
      });
  };

  handleColor = e => {
    this.setState({ selectedItem: e.target.innerText });
  };

  menuHandle = e => {
    this.getData();
    this.handleColor(e);
  };

  //두개를묶는다 menuhandle

  render() {
    const { productList } = this.state;
    return (
      <>
        <div className="Container">
          <div className="pickListnum">
            <p>
              총 <span>200</span>개
            </p>
            <div className="pickListBox">
              <p
                className={
                  this.state.selectedItem === '추천순'
                    ? 'selected'
                    : 'unselected'
                }
                onClick={e => this.menuHandle(e)}
              >
                추천순
              </p>
              <p
                className={
                  this.state.selectedItem === '인기순'
                    ? 'selected'
                    : 'unselected'
                }
                onClick={e => this.menuHandle(e)}
              >
                인기순
              </p>
              <p
                className={
                  this.state.selectedItem === '최신순'
                    ? 'selected'
                    : 'unselected'
                }
                onClick={e => this.menuHandle(e)}
              >
                최신순
              </p>
              <p
                className={
                  this.state.selectedItem === '낮은가격순'
                    ? 'selected'
                    : 'unselected'
                }
                onClick={e => this.menuHandle(e)}
              >
                낮은가격순
              </p>
              <p
                className={
                  this.state.selectedItem === '높은가격순'
                    ? 'selected'
                    : 'unselected'
                }
                onClick={e => this.menuHandle(e)}
              >
                높은가격순
              </p>
            </div>
          </div>
          <section>
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
                    howMuchSale={item.howMuchSale}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default ProductList;
