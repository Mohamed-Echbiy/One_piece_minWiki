import React from "react";
import styled from "styled-components";

export default function CharacterCard({ data }) {
  return (
    <Card>
      <Image>
        <img
          src={data.character.images.jpg.image_url}
          alt={data.character.name}
          width="300"
          height="466.66"
        />
      </Image>
      <p>{data.character.name}</p>
    </Card>
  );
}
const Card = styled.div`
  margin: 0px 10px;
  box-shadow: 0px 6px 10px 0px #00000054;
  position: relative;
  margin-bottom: 20px;
  min-width: 300px;

  > p {
    position: absolute;
    width: fit-content;
    left: 0px;
    top: 0px;
    padding: 5px 10px;
    background-color: gold;
    border-radius: 0px 0px 14px 0px;
    font-weight: 600;
    font-size: 0.9rem;
    text-align: center;
  }
`;
const Image = styled.div`
  img {
    width: 100%;
    min-width: 280px;
  }
`;
