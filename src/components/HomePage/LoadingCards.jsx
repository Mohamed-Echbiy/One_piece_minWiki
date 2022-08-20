import React from "react";
import styled from "styled-components";
import { SwiperSlide, Swiper } from "swiper/react";
import { Skeleton } from "@mui/material";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
function LoadingCards() {
  return (
    <Div>
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
        <SwiperSlide>
          <Skeleton
            variant="rectangular"
            width={300}
            height={466.66}
            sx={{ bgcolor: "#242424c1" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Skeleton
            variant="rectangular"
            width={300}
            height={466.66}
            sx={{ bgcolor: "#242424c1" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Skeleton
            variant="rectangular"
            width={300}
            height={466.66}
            sx={{ bgcolor: "#242424c1" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Skeleton
            variant="rectangular"
            width={300}
            height={466.66}
            sx={{ bgcolor: "#242424c1" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Skeleton
            variant="rectangular"
            width={300}
            height={466.66}
            sx={{ bgcolor: "#242424c1" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Skeleton
            variant="rectangular"
            width={300}
            height={466.66}
            sx={{ bgcolor: "#242424c1" }}
          />
        </SwiperSlide>
      </Swiper>
    </Div>
  );
}

export default LoadingCards;

const Div = styled.div`
  .swiper {
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
`;
