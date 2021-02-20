import React, { Component } from 'react';
import ProductBox from '../ProductBox/ProductBox';
import './ProductContainer.scss';

class ProductContainer extends Component {
  render() {
    const { id } = this.props;
    console.log('props로 넘어왔닝', this.props.list);
    console.log('key값 보여줘', this.props.id);
    return (
      <article className="ProductContainer">
        {id === 0 && <h2>잘나가요</h2>}
        {id === 1 && <h2>새로 나왔어요</h2>}
        {id === 2 && <h2>지금은 할인중</h2>}
        <div className="listContainer">
          {Object.values(this.props.list).map(item => {
            return (
              <ProductBox
                key={item.id}
                name={item.name}
                imgSrc={item.imageUrl}
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
