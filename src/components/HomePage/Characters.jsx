import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import LoadingCards from "./LoadingCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Characters() {
  const fetchCharacters = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/21/characters`);
    const data = await res.json();
    return data.data.slice(0, 10);
  };
  const { data, isLoading, isError, isSuccess } = useQuery(
    ["Characters"],
    fetchCharacters
  );

  //Loading
  if (isLoading) {
    return <LoadingCards />;
  }
  return (
    <Div>
      <h2>Main Characters</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={5}
        grabCursor={true}
        pagination={{ clickable: true }}
        breakpoints={{
          300: {
            width: 300,
            slidesPerView: 1,
          },
          625: {
            width: 620,
            slidesPerView: 2,
          },
          925: {
            width: 920,
            slidesPerView: 3,
          },
          1225: {
            width: 1220,
            slidesPerView: 4,
          },
          1520: {
            width: 1520,
            slidesPerView: 5,
          },
        }}
        className="swiper"
      >
        {data.map((data) => {
          return (
            <SwiperSlide key={data.character.name}>
              <CharacterCard data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  > .swiper {
    padding: 0px 10px;
    padding-top: 20px;
    padding-bottom: 40px;
    box-shadow: 0px 5px 20px black;
  }
  .swiper-pagination {
    span {
      width: 15px;
      height: 15px;
    }
    span.swiper-pagination-bullet-active {
      background-color: gold;
    }
  }
  h2 {
    width: 100%;
    margin-bottom: 30px;
    padding: 0px 50px;
    color: gold;
  }
  img {
    width: 100%;
  }
  > img {
    width: 100px;
  }
`;
