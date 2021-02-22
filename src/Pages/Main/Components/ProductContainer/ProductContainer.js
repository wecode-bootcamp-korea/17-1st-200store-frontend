import React, { Component } from 'react';
import ProductBox from '../ProductBox/ProductBox';
import GiftBox from '../GiftBox/GiftBox';
import GIFTDATA from '../../GiftBoxData';
import './ProductContainer.scss';

class ProductContainer extends Component {
  constructor() {
    super();
    this.state = {
      giftList: [],
    };
  }
  componentDidMount() {
    this.setState({ giftList: GIFTDATA });
  }
  render() {
    const { id, list } = this.props;
    return (
      <article className="ProductContainer">
        {id === 0 && <h2>잘나가요</h2>}
        {id === 1 && <h2>새로 나왔어요</h2>}
        {id === 2 && <h2>지금은 할인중</h2>}
        <div className="listContainer">
          {Object.values(list).map(item => {
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
        {id === 1 && (
          <section className="giftBox">
            <h2>선물하기 딱 좋아요!</h2>
            <div className="giftContainer">
              {this.state.giftList.map(gift => {
                return (
                  <GiftBox
                    key={gift.id}
                    alt={gift.alt}
                    src={gift.src}
                    bigText={gift.bigText}
                    smallText={gift.smallText}
                  />
                );
              })}
            </div>
          </section>
        )}
      </article>
    );
  }
}

export default ProductContainer;
