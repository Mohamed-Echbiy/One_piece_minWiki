import React from "react";
import styled from "styled-components";
export default function Quote() {
  return (
    <Div>
      <h3>Gol D Roger : </h3>
      <p>
        "you want my treasure, you can have it I left everything I gathered
        together in one place. Now you'll just have to find it!."
      </p>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  width: fit-content;
  padding: 40px;
  background-color: #161616bf;
  margin: auto;
  box-shadow: 0px 6px 10px 0px #0000007d;
  margin-bottom: 40px;
  @media (max-width: 765px) {
    padding: 40px 15px;
  }
  h3 {
    margin-bottom: 15px;
    font-weight: 800;
    font-size: 1.5rem;
    color: #df1e34;
  }
  p {
    color: #ffffffbf;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    @media (max-width: 375px) {
      font-size: 0.7rem;
    }
  }
`;
