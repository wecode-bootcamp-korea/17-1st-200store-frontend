import React, { Component } from 'react';
import Slider from 'react-slick';
import './Slider.scss';

export default class SimpleSlider extends Component {
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
          <div>
            <img
              alt="slider1"
              src={
                'https://images.unsplash.com/photo-1499892477393-f675706cbe6e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
              }
            />
          </div>
          <div>
            <img
              alt="slider2"
              src={
                'https://images.unsplash.com/photo-1551233378-136a5b5564a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
            />
          </div>
          <div>
            <img
              alt="slider3"
              src={
                'https://images.unsplash.com/photo-1583315528086-43fae4464aa2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
            />
          </div>
        </Slider>
      </div>
    );
  }
}
