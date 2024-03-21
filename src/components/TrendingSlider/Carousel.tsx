"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel} from 'react-responsive-carousel'; 
import ItemComponent from "./ItemComponent";
import ReactPlayer from 'react-player'
import "./Carousels.css";
import { useEffect, useRef } from "react";
// import myVideo from '../../../public/imagess/blog/apalachicola1.mp4'


const Carousels = ({ data }: {
    data: {
        image: string
    }[]
}) => {
  const vidRef = useRef();
  useEffect(()=> {
    vidRef.current.play();
  },[])
    return (
      <div>
        <Carousel autoPlay interval="5000" transitionTime="5000" showThumbs={false} dynamicHeight={false}
         className="carousel-container">
          <div> 
            {/* <img id="backgroundimage" src="/images/blog/img1.png" alt="" className="slideImage" style={{width: "100%", height: '900px', resizeMode: 'cover'}}></img> */}
            {/* <ItemComponent/> */}
            <video
              ref={vidRef}
              autoPlay={true} src={'videos/apalachicola2.mp4'}
              muted
              loop/>
          </div> 
          <div> 
            {/* <img id="backgroundimage" src="/images/blog/img2.jpg" alt="" className="slideImage" style={{width: "100%", height: '900px', resizeMode: 'cover'}}></img> */}
            <video
              ref={vidRef}
              autoPlay={true} src={'videos/dronevideodowntownjacksonville1.mp4'}
              muted
              loop/>
          </div> 
          <div> 
            {/* <img id="backgroundimage" src="/images/blog/img6.jpg" alt="" className="slideImage" style={{width: "100%", height: '900px', resizeMode: 'cover'}}></img> */}
            <video
              ref={vidRef}
              autoPlay={true} src={'videos/grandGablesInn1.mov'}
              muted
              loop/>
            {/* <ItemComponent/> */}
          </div>
        </Carousel>
      </div>
    )
}

export default Carousels