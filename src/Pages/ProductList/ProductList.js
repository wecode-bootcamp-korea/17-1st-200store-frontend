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

  // getProductList = () => {
  //   let addressUrl = this.props.history.location['search'];
  //   let urlIndex = addressUrl.indexOf('=') + 1;
  //   let resultUrl = addressUrl.slice(urlIndex);

  //   fetch(`http://10.58.2.240:8000/product?category=${resultUrl}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         productList: res.data.products,
  //       });
  //     });
  // };

  // 없어도 실행
  // componentDidMount() {
  //   let addressUrl = this.props.history.location['search'];
  //   let urlIndex = addressUrl.indexOf('=') + 1;
  //   let resultUrl = addressUrl.slice(urlIndex);

  //   this.setState({
  //     category: resultUrl,
  //   });

  //   this.getProductList();
  // }

  // componentDidUpdate() {
  //   let addressUrl = this.props.history.location['search'];
  //   let urlIndex = addressUrl.indexOf('=') + 1;
  //   let resultUrl = addressUrl.slice(urlIndex);

  //   if (this.state.category !== resultUrl) {
  //     this.getProductList();
  //     this.setState({
  //       category: resultUrl,
  //     });
  //   }
  // }

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

  render() {
    const { productList, selectedItem } = this.state;

    return (
      <div className="ProductList">
        <div className="pickListnum">
          <p>
            총 <span>{this.state.productList.length}</span>개
          </p>
          <div className="pickListBox">
            <p
              className={selectedItem === '추천순' ? 'selected' : 'unselected'}
              name="total_sales"
              onClick={e => this.menuHandle(e)}
            >
              추천순
            </p>
            <p
              className={selectedItem === '인기순' ? 'selected' : 'unselected'}
              onClick={e => this.menuHandle(e)}
              id="total_sales"
            >
              인기순
            </p>
            <p
              className={selectedItem === '최신순' ? 'selected' : 'unselected'}
              onClick={e => this.menuHandle(e)}
              id="-create_at"
            >
              최신순
            </p>
            <p
              className={
                selectedItem === '낮은가격순' ? 'selected' : 'unselected'
              }
              onClick={e => this.menuHandle(e)}
              id="price"
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

export default ProductList;
