import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3><img src="/assets/images/background.png" /></h3>
          </div>
          <div>
          <h3><img src="/assets/images/background1.png" /></h3>
          </div>
          <div>
          <h3><img src="/assets/images/background3.png" /></h3>
          </div>
          <div>
          <h3><img src="/assets/images/background4.png" /></h3>
          </div>
          <div>
          <h3><img src="/assets/images/background.png" /></h3>
          </div>
          <div>
          <h3><img src="/assets/images/background3.png" /></h3>
          </div>
        </Slider>
      </div>
    );
  }
}
