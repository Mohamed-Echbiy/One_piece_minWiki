import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsEye, BsFillCalendar2CheckFill, BsStar } from "react-icons/bs";
import { TiEqualsOutline } from "react-icons/ti";
import { Skeleton } from "@mui/material";
import styled from "styled-components";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function Statics() {
  const fetchStatic = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/21/statistics`);
    const data = await res.json();
    return data.data;
  };
  const { data, isError, isLoading } = useQuery(["statics"], fetchStatic);
  //loading stage
  if (isLoading) {
    return (
      <Div>
        <Watching>
          <Skeleton
            variant="circular"
            width={30}
            height={30}
            sx={{ bgcolor: "#242424c1" }}
          />
          <Skeleton variant="text" width={200} sx={{ bgcolor: "#242424c1" }} />
        </Watching>
        <PlanToWatch>
          <Skeleton
            variant="circular"
            width={30}
            height={30}
            sx={{ bgcolor: "#242424c1" }}
          />
          <Skeleton variant="text" width={200} sx={{ bgcolor: "#242424c1" }} />
        </PlanToWatch>
        <Score>
          <Skeleton
            variant="circular"
            width={30}
            height={30}
            sx={{ bgcolor: "#242424c1" }}
          />
          <Skeleton variant="text" width={200} sx={{ bgcolor: "#242424c1" }} />
        </Score>
        <Total>
          <Skeleton
            variant="circular"
            width={30}
            height={30}
            sx={{ bgcolor: "#242424c1" }}
          />
          <Skeleton variant="text" width={200} sx={{ bgcolor: "#242424c1" }} />
        </Total>
      </Div>
    );
  }
  return (
    <Div>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        offset={0}
        animateOnce={true}
      >
        <Watching className="icon-container">
          <BsEye />
          <p>Watching : </p>
          <p className="number-Static"> {data.watching} </p>
        </Watching>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        offset={200}
        animateOnce={true}
      >
        <PlanToWatch className="icon-container">
          <BsFillCalendar2CheckFill />
          <p>Plan to watch : </p>
          <p className="number-Static"> {data.plan_to_watch} </p>
        </PlanToWatch>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        offset={200}
        animateOnce={true}
      >
        <Score className="icon-container">
          <BsStar />
          <p>Score : </p>
          <p className="number-Static"> 8.5 </p>
        </Score>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        offset={200}
        animateOnce={true}
      >
        <Total className="icon-container">
          <TiEqualsOutline />
          <p>Total :</p>
          <p className="number-Static">{data.total}</p>
        </Total>
      </AnimationOnScroll>
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px 10px;
  p {
    color: white;
    display: flex;
    align-items: center;
  }
  p.number-Static {
    color: Gold;
  }
  svg {
    width: 30px;
    height: 30px;
    filter: invert(100%) sepia(0%) saturate(7427%) hue-rotate(23deg)
      brightness(118%) contrast(118%);
  }
  > div {
    box-shadow: 0px 7px 10px 0px #000000ab;
    margin-right: 10px;
    margin-bottom: 15px;
    width: 24%;
    min-width: 166px;
  }
  @media (max-width: 960px) {
    padding: 30px 0px;
    p {
      font-size: 0.8rem;
    }
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
const Watching = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 5px;
  min-width: 135px;
`;
const PlanToWatch = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 5px;
`;
const Score = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  justify-content: center;
  padding: 10px 5px;
  min-width: 115px;
`;
const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 5px;
  min-width: 118px;
`;
