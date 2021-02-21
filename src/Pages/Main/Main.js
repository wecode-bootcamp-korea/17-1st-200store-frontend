import React, { Component } from 'react';
import Slider from './Components/Slider/Slider';
import ProductContainer from './Components/ProductContainer/ProductContainer';
import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      allList: [],
    };
  }

  //백엔드랑 통신할때는 allList: res.data
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
  }
  render() {
    return (
      <div className="Main">
        <Slider />
        <div className="mainContent">
          {Object.values(this.state.allList).map((el, idx) => {
            return <ProductContainer key={idx} id={idx} list={el} />;
          })}
        </div>
      </div>
    );
  }
}

export default Main;
