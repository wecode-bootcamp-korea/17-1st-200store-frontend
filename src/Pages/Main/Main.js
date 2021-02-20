import React, { Component } from 'react';
import Slider from './Components/Slider/Slider';
import ProductContainer from './Components/ProductContainer/ProductContainer';
import GiftBox from './Components/GiftBox/GiftBox';
import GIFTDATA from './GiftBoxData';
import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      allList: [],
      giftList: [],
    };
  }

  componentDidMount() {
    fetch('/data/mainData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          allList: res,
        });
      });

    this.setState({ giftList: GIFTDATA });
  }
  render() {
    console.log('allList 보여줘..제발...', this.state.allList);
    return (
      <div className="Main">
        <Slider />
        <div className="mainContent">
          {Object.values(this.state.allList).map((el, idx) => {
            return <ProductContainer key={idx} id={idx} list={el} />;
          })}
          <section className="giftBox">
            <h2>선물하기 딱 좋아요!</h2>
            <div className="giftContainer">
              {this.state.giftList.map(gift => {
                return (
                  <GiftBox
                    key={gift.id}
                    alt={gift.alt}
                    src={gift.src}
                    h3Text={gift.h3Text}
                    h4Text={gift.h4Text}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
