import React, {useContext} from 'react';
import {Context} from "../../store";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slideImg1 from "../../public/image/1.jpeg"
import slideImg2 from "../../public/image/3.jpeg"
import slideImg3 from "../../public/image/2.jpeg"
import {Link} from 'react-router-dom';
 
const slideImages = [
  slideImg1,slideImg2,slideImg3
];
const Banner = () => {
  const [state, dispatch] = useContext(Context)
  const {setting} = state

  return (
    <div className="slide-container">
      <Slide>
        <Link to={`/`}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}/>
          </div>
        </Link>
        <Link to={`/`}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
        </Link>
        <Link to={`/`}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Link>
      </Slide>
    </div>
  )
};

export default Banner;
