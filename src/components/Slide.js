import React, { Component } from 'react';
import lock from '../assets/lock.svg';
import brain from '../assets/brain.svg';
import Carousel from 'react-elastic-carousel';


class Slide extends Component {
   

  render () {
    
    return (
      <Carousel>
      	  <img src={lock}   alt="Smiley face2" /> 
		  <img src={brain}   alt="Smiley face1" />
		  <img src={brain}   alt="Smiley face1" />
		  <img src={lock}   alt="Smiley face2" /> 
      </Carousel>
    )
  }
}

export default Slide