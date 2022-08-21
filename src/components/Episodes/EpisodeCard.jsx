import { useState } from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { CircularProgress } from "@mui/material";

function EpisodeCard({ epdata }) {
  const [isImageLoaded, setImageLoaded] = useState(false);
  const epnumbers = epdata.episode
    .split(" ")
    .map((L) => +L)[1]
    .toString()
    .split("");

  return (
    <Div className={!isImageLoaded ? "p-5" : undefined}>
      <div className="Epcard__container">
        {!isImageLoaded && (
          <div className="loading">
            <CircularProgress />
          </div>
        )}
        <div className="Epcard__image">
          <a href={epdata.url} target="_blank" title="watch now">
            <img
              src={epdata.images.jpg.image_url}
              alt={`${epdata.episode} one piece`}
              width="200"
              height="auto"
              onLoad={() => setImageLoaded((pre) => !pre)}
            />
          </a>
          <a href={epdata.url} target="_blank" title="watch now">
            <BsPlayCircleFill className="play__icon" />
          </a>
          <p className="title"> {epdata.title} </p>
        </div>
        <div className="ep">
          {epnumbers.map((N) => (
            <span key={nanoid()}>{N}</span>
          ))}
        </div>
      </div>
    </Div>
  );
}

export default EpisodeCard;

const Div = styled.div`
  width: 24%;
  min-width: 250px;
  &.p-5 {
    padding: 5px;
  }
  .Epcard__container {
    width: 100%;
    min-width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    z-index: 101;
    position: relative;
    .loading {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #050404;
      z-index: 10000;
      display: flex;
      justify-content: center;
      align-items: center;
      span svg {
        color: gold;
      }
    }
  }
  @media (max-width: 520px) {
    min-width: 95%;
  }

  .Epcard__image {
    width: 100%;
    margin-left: 10px;
    position: relative;
    transition: linear 0.3s 0.1s;
    z-index: 100;
    overflow: hidden;
    @media (max-width: 420px) {
      overflow: visible;
    }
    &:hover {
      transform: rotate(-1deg);
    }
    :hover img,
    :hover .play__icon {
      border: 2px solid crimson;
      color: #000000;
    }
    :hover .title {
      transform: translateY(0px);
    }
    img {
      width: 100%;
      cursor: pointer;
      border: 2px solid white;
    }
    .play__icon {
      color: #000;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 50px;
      border: 2px solid white;
      border-radius: 50%;
      @media (max-width: 420px) {
        width: 35px;
        height: 35px;
      }
    }
    .title {
      position: absolute;
      padding: 10px;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #ffffffbb;
      font-size: 0.6rem;
      font-weight: 600;
      transform: translateY(-45px);
      transition: linear 0.4s;
      @media (max-width: 420px) {
        transform: translateY(0px);
      }
    }
  }
  .ep {
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: fit-content;
    span {
      background-color: gold;
      font-size: 1.5rem;
      padding: 0px 10px;
      border-radius: 0px 20px 20px 0px;
      margin-bottom: 1px;
      transform: translateX(-5px);
      cursor: pointer;
      z-index: 99;
      transition: linear 0.3s;
      &:hover {
        transform: translateX(0px);
      }
      @media (max-width: 1000px) {
        font-size: 1.1rem;
      }
      @media (min-width: 1001px) and (max-width: 1200px) {
        font-size: 1.3rem;
      }
    }
  }
`;
