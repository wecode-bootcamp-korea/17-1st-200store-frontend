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
      sorting: '',
    };
  }

  getData = () => {
    fetch('/ProductList.json')
      .then(res => res.json())
      .then(res => {
        console.log(res);
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

  render() {
    const { productList, selectedItem } = this.state;
    const arr = ['추천순', '인기순', '최신순', '낮은가격순', '높은가격순'];

    return (
      <div className="ProductList">
        <div className="pickListnum">
          <p>
            총 <span>200</span>개
          </p>
          <div className="pickListBox">
            {arr.map(elements => {
              return (
                <p
                  className={selectedItem === { elements }}
                  onClick={e => this.menuHandle(e)}
                >
                  {elements}
                </p>
              );
            })}
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
                  imgSrc={item.imageUrl}
                  isBest={item.isBest}
                  isNew={item.isNew}
                  isSale={item.isSale}
                  sale={item.sale}
                  stock={item.stock}
                />
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default ProductList;
