import { Skeleton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
function StaffCard({ data }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const ImageHasLoaded = () => {
    setImageLoaded((pre) => !pre);
  };
  const DImg =
    "https://cdn.myanimelist.net/images/questionmark_23.gif?s=f7dcbc4a4603d18356d3dfef8abd655c";
  let ImgSrc;
  if (data.person.images.jpg.image_url === DImg) {
    ImgSrc = "https://avatarfiles.alphacoders.com/829/82986.jpg";
  } else {
    ImgSrc = data.person.images.jpg.image_url;
  }
  return (
    <Div>
      <div className="staff__card">
        <div className="staff__image">
          <img src={ImgSrc} alt={data.person.name} onLoad={ImageHasLoaded} />
          {!imageLoaded && (
            <Skeleton variant="rectangular" className="LoadingDemo" />
          )}
        </div>
        <div className="staff_info">
          <h2>{data.person.name}</h2>
          {data.positions.map((position) => (
            <p>
              <span>Position:</span> {position}
            </p>
          ))}
        </div>
      </div>
    </Div>
  );
}

export default StaffCard;

const Div = styled.div`
  margin-bottom: 20px;
  .staff__card {
    width: 250px;
    padding: 0px 10px;
    /* @media (max-width: 765px) {
      width: 100px;
      height: 500px;
    } */
  }
  .staff__image {
    margin-bottom: 10px;
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 250px;
      border-radius: 5px;
    }
  }
  .staff_info {
    color: #ffffffc4;
    text-align: center;
    h2 {
      margin-bottom: 10px;
      color: gold;
    }
    p {
      margin-bottom: 10px;
      color: #ffffffa6;
    }
  }
  .loadingDemo {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
  }
`;
