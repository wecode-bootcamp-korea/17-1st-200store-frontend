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
      selectedItem: 1,
      sorting: 'total_sales',
      category: '',
    };
  }

  getData = sorting => {
    fetch(`http://10.58.2.240:8000/product?sorting=${sorting}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          productList: res.data.products,
        });
      });
  };

  getProductList = () => {
    let addressUrl = this.props.history.location['search'];
    let urlIndex = addressUrl.indexOf('=') + 1;
    let resultUrl = addressUrl.slice(urlIndex);

    fetch(`http://10.58.2.240:8000/product?category=${resultUrl}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          productList: res.data.products,
        });
      });
  };

  // 없어도 실행
  componentDidMount() {
    let addressUrl = this.props.history.location['search'];
    let urlIndex = addressUrl.indexOf('=') + 1;
    let resultUrl = addressUrl.slice(urlIndex);

    this.setState({
      category: resultUrl,
    });

    this.getProductList();
  }

  componentDidUpdate() {
    let addressUrl = this.props.history.location['search'];
    let urlIndex = addressUrl.indexOf('=') + 1;
    let resultUrl = addressUrl.slice(urlIndex);

    if (this.state.category !== resultUrl) {
      this.getProductList();
      this.setState({
        category: resultUrl,
      });
    }
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
    this.getData(e.target.id);
    // this.getData();
    this.handleColor(e);
  };

  // clickMenu = id => {
  //   this.setState({ selectedItem: id });
  // };

  render() {
    const { productList, selectedItem } = this.state;
    return (
      <div>
        <div className="ProductList">
          <div className="pickListnum">
            {/* <p>
            총 <span>{this.state.productList.length}</span>개
          </p>
          <div className="pickListBox">
            <p onClick={() => this.menuHandle(1)} name="total_sales">
              추천순
            </p>
            <p onClick={() => this.menuHandle(2)} id="total_sales">
              인기순
            </p>
            <p onClick={() => this.menuHandle(3)} id="-create_at">
              최신순
            </p>
            <p onClick={() => this.menuHandle(4)} id="price">
              낮은가격순
            </p>
            <p onClick={() => this.menuHandle(5)} id="-price">
              높은가격순
            </p> */}

            <p
              className={selectedItem === 1 ? 'selected' : 'unselected'}
              name="total_sales"
              onClick={e => this.menuHandle(e)}
            >
              추천순
            </p>
            <p
              className={selectedItem === 2 ? 'selected' : 'unselected'}
              onClick={e => this.menuHandle(e)}
              id="total_sales"
            >
              인기순
            </p>
            <p
              className={selectedItem === 3 ? 'selected' : 'unselected'}
              onClick={e => this.menuHandle(e)}
              id="-create_at"
            >
              최신순
            </p>
            <p
              className={selectedItem === 4 ? 'selected' : 'unselected'}
              onClick={e => this.menuHandle(e)}
              id="price"
            >
              낮은가격순
            </p>
            <p
              className={
                this.state.selectedItem === 5 ? 'selected' : 'unselected'
              }
              onClick={e => this.menuHandle(e)}
              id="-price"
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
                  id={item.id}
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

// const CATEGORY_MENU = {
//   1: '추천순',
//   2: '인기순',
//   3: '최신순',
//   4: '낮은가격순',
//   5: '높은가격순',
// };

export default ProductList;
