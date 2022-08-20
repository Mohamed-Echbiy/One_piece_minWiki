import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import Quote from "./HomePage/Quote";
import Statics from "./HomePage/Statics";
import Summry from "./HomePage/Summry";
import Characters from "./HomePage/Characters";
import TheAnimeMg from "./HomePage/TheAnimeMng";
import VideoIntro from "./HomePage/VideoIntro";

export default function HomePage() {
  return (
    <div>
      <Summry />
      <AnimationOnScroll
        animateIn="animate__fadeInLeft"
        offset={150}
        animateOnce={true}
      >
        <Quote />
      </AnimationOnScroll>
      <Statics />
      <Characters />
      <TheAnimeMg />
      <VideoIntro />
    </div>
  );
}
