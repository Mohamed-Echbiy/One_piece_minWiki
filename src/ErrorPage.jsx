import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import errorImage from "./assets/zoro-error.png";

function ErrorPage() {
  return (
    <Div>
      <div className="error__text">
        <p>Sorry, We cannot find the requested page</p>
        <h1>You are lost !</h1>
        <Link to="/">Go back to Home</Link>
      </div>
      <div className="error__image">
        <img src={errorImage} alt="a chibi for zoro character" />
      </div>
    </Div>
  );
}

export default ErrorPage;

const Div = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  box-shadow: 0px 0px 25px gold;
  background-color: #f5f5f5ea;
  border-radius: 20px;
  overflow: hidden;
  padding: 20px 0px;
  @media (max-width: 665px) {
    width: 95%;
  }
  @media (max-width: 992px) {
    width: 95%;
  }
  @media (min-width: 1600px) {
    width: 60%;
  }
  .error__text {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a {
      padding: 12px;
      display: block;
      background-color: black;
      border-radius: 10px;
      margin-top: 20px;
      color: gold;
    }
    h1 {
      color: #065a06;
      margin-top: 20px;
      font-size: 2rem;
    }
    p {
      color: #000000eb;
      font-size: 1.4rem;
      text-align: center;
      line-height: 1.6;
      @media (max-width: 765px) {
        font-size: 1.1rem;
      }
    }
  }
  .error__image {
    box-sizing: content-box;
    width: 40%;
    min-height: 50vh;
    padding: 20px;
    display: flex;
    align-items: center;
    @media (max-width: 765px) {
      padding: 20px 5px;
      min-height: fit-content;
    }
    img {
      max-width: 100%;
    }
  }
`;
