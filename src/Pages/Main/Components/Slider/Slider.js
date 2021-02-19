import React, { Component } from 'react';
import Slider from 'react-slick';
import SLIDERDATA from './sliderData';
import './Slider.scss';

export default class SimpleSlider extends Component {
  constructor() {
    super();
    this.state = {
      sliderList: [],
    };
  }

  componentDidMount() {
    this.setState({
      sliderList: SLIDERDATA,
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
    };
    return (
      <div className="Slider">
        <Slider {...settings}>
          {this.state.sliderList.map(data => {
            return (
              <div className="sliderItem">
                <img alt={data.name} src={data.src} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
