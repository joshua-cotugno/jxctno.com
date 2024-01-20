import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./styles.css";
import "react-slideshow-image/dist/styles.css";

class Slideshow extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0,
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
      indicators: (i) => <div className="indicator">{i + 1}</div>,
    };
    const slideImages = [
      "https://i.ibb.co/2hMKBmF/Capacitors-in-Guitars-1.jpg",
      "https://i.ibb.co/cT6nr9g/Capacitors-in-Guitars-2.jpg",
      "https://i.ibb.co/FmRxHQf/Capacitors-in-Guitars-3.jpg",
      "https://i.ibb.co/4JYMbxK/Capacitors-in-Guitars-4.jpg",
      "https://i.ibb.co/3M7Rxpg/Capacitors-in-Guitars-5.jpg",
      "https://i.ibb.co/vZGLrF4/Capacitors-in-Guitars-6.jpg",
      "https://i.ibb.co/0KqRfqQ/Capacitors-in-Guitars-7.jpg",
      "https://i.ibb.co/bN2PV2B/Capacitors-in-Guitars-8.jpg",
      "https://i.ibb.co/w0BY763/Capacitors-in-Guitars-9.jpg",
      "https://i.ibb.co/p4tgJCJ/Capacitors-in-Guitars-10.jpg",
      "https://i.ibb.co/X3Kx4Tb/Capacitors-in-Guitars-11.jpg",
      "https://i.ibb.co/kHCmDjj/Capacitors-in-Guitars-12.jpg",
      "https://i.ibb.co/yPfx4z7/Capacitors-in-Guitars-13.jpg",
      "https://i.ibb.co/gr9NtzY/Capacitors-in-Guitars-14.jpg",
      "https://i.ibb.co/Q8GnS59/Capacitors-in-Guitars-15.jpg",
      "https://i.ibb.co/h1sx0S1/Capacitors-in-Guitars-16.jpg",
      "https://i.ibb.co/92C4qdg/Capacitors-in-Guitars-17.jpg",
      "https://i.ibb.co/DDcjDcd/Capacitors-in-Guitars-18.jpg",
      "https://i.ibb.co/3dbPmS7/Capacitors-in-Guitars-19.jpg",
      "https://i.ibb.co/wwGC2nD/Capacitors-in-Guitars-20.jpg",
    ];
    return (
      <div className="App">
        <h3>Slide Effect</h3>
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>

        <div className="slide-container buttons">
          <button onClick={this.back} type="button">
            Go Back
          </button>
          <button onClick={this.next} type="button">
            Go Next
          </button>
        </div>
      </div>
    );
  }
}

export default Slideshow;
