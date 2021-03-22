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
      sorting: 'total_sales',
      category: '',
      currentId: 1,
    };
  }

  // getData = sorting => {
  //   fetch(`http://10.58.2.240:8000/product?sorting=${sorting}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         productList: res.data.products,
  //       });
  //     });
  // };

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

  // 먼저 실행
  componentDidMount() {
    let addressUrl = this.props.history.location['search'];
    let urlIndex = addressUrl.indexOf('=') + 1;
    let resultUrl = addressUrl.slice(urlIndex);

    this.getProductList();

    this.setState({
      category: resultUrl,
    });
  }

  componentDidUpdate() {
    let addressUrl = this.props.history.location['search'];
    let urlIndex = addressUrl.indexOf('=') + 1;
    let resultUrl = addressUrl.slice(urlIndex);

    //if문이 사실이라면 컨디업 실행
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

  handleColor = id => {
    this.setState({ selectedItem: id });
  };

  // menuHandle = e => {
  //   this.getData(e.target.id);
  //   // this.getData();
  //   this.handleColor(e);
  // };

  menuClick = id => {
    this.setState({ currentId: id });
    this.handleColor();
  };

  render() {
    const { productList, selectedItem } = this.state;

    return (
      <div className="ProductList">
        <div className="pickListnum">
          <p>
            총 <span>{productList.length}</span>개
          </p>
          <div className="pickListBox">
            {CATEGORYMENU.map((category, idx) => {
              return (
                <p
                  key={idx}
                  onClick={() => this.menuClick(idx + 1)}
                  className={category}
                >
                  {category}
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

const CATEGORYMENU = ['인기', '최고', '최신', '낮은', '높은'];

export default ProductList;
