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
    fetch('http://10.58.2.240:8000/main', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          allList: res.data,
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
