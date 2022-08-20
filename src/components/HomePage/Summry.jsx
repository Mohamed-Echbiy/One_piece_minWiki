import React from "react";
import styled from "styled-components";
// assets
import luffyImg from "../../assets/Monkey_D_Luffy.png";

export default function Summry() {
  return (
    <Div>
      <h2 className="animate__animated animate__jello">ONE PIECE</h2>
      <img
        src={luffyImg}
        width="250"
        height="484"
        alt="luffy the main character"
        className="animate__animated animate__bounceIn"
      />
      <p className="animate__animated animate__fadeInUp">
        The series focuses on <span> Monkey D. Luffy </span>, a young man made
        of rubber, who, inspired by his childhood idol, the powerful pirate
        Red-Haired Shanks, sets off on a journey from the East Blue Sea to find
        the mythical treasure, the One Piece, and proclaim himself the King of
        the Pirates.
      </p>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  max-height: calc(100vh - 78px);
  padding: 0px 20px;
  margin-bottom: 60px;
  @media (max-width: 765px) {
    padding: 0px 5px;
  }
  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
    color: Gold;
  }
  p {
    width: 60%;
    display: block;
    font-size: 1.6rem;
    line-height: 1.6;
    color: #fffafaaf;
    span {
      color: #000;
      padding: 0px 2px;
      margin-right: 1px;
      background-color: gold;
      display: inline-block;
      transform: skewX(10deg);
      border-radius: 2px;
    }
  }
  img {
    width: 250px;
    min-width: 80px;
  }
  @media (max-width: 540px) {
    img {
      width: 80px;
      height: auto;
    }
    p {
      font-size: 0.8rem;
    }
  }
  @media (min-width: 540px) and (max-width: 765px) {
    img {
      width: 120px;
      height: auto;
    }
    p {
      font-size: 1rem;
    }
  }
  @media (min-width: 766px) and (max-width: 992px) {
    img {
      width: 120px;
      height: auto;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;
