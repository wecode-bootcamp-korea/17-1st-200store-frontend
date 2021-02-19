import React, { Component } from 'react';
import ProductBox from '../ProductBox/ProductBox';
import './ProductContainer.scss';

class ProductContainer extends Component {
  render() {
    console.log('어떤 리스트니', this.props.listName);
    return (
      <article>
        <h2>잘나가요</h2>
        <div className="listContainer">
          {this.props.list.map(item => {
            return (
              <ProductBox
                key={item.id}
                name={item.name}
                imgSrc={item.imgSrc}
                price={item.price}
                isBest={item.isBest}
                isNew={item.isNew}
                isSale={item.isSale}
                sale={item.sale}
              />
            );
          })}
        </div>
      </article>
    );
  }
}

export default ProductContainer;
