import React from "react";
import styled from "styled-components";
//assets
import trailer from "../../assets/trailer.mp4";
import poster from "../../assets/poster.jpg";
function VideoIntro() {
  return (
    <Div className="video__container">
      <h2>One piece Trailer</h2>

      <video name="media" controls poster={poster}>
        <source src={trailer} type="video/mp4" title="one piece trailer" />
      </video>
    </Div>
  );
}

export default VideoIntro;
const Div = styled.div`
  margin: auto;
  width: 100%;
  padding: 20px 10px;
  margin-bottom: 20px;
  h2 {
    color: gold;
    text-align: center;
    margin-bottom: 20px;
  }
  video {
    display: block;
    margin: auto;
    width: 700px;
    height: 390px;
    border-radius: 20px;
    outline: none;
    border: none;
    box-shadow: 2px 10px 10px black;
    @media (max-width: 415px) {
      width: 100%;
      min-width: 300px;
      height: 178px;
    }
    @media (min-width: 416px) and (max-width: 720px) {
      width: 100%;
      min-width: 300px;
      height: 250px;
    }
  }
`;
