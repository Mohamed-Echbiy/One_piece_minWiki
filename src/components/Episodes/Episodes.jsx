import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import EpisodeCard from "./EpisodeCard";
//assets
import "animate.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

function Episodes() {
  const [page, setPage] = useState(1);
  const fetchEpisodes = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime/21/videos/episodes?page=${page}`
    );
    const data = await res.json();
    return data;
  };
  const { data, isLoading, isError, isSuccess } = useQuery(
    ["episodes", page],
    fetchEpisodes
  );
  if (isLoading) {
    return (
      <Div className="loading">
        <img
          src="https://optc-ww.channel.or.jp/kr/common/images/loading.gif"
          alt="loading"
        />
      </Div>
    );
  }
  console.log(data);
  if (isSuccess) {
    return (
      <Div>
        <h1>Anime Episodes:</h1>
        <div className="next_pre">
          <button
            disabled={page <= 1}
            onClick={() => setPage((pre) => pre - 1)}
            className="animate__animated scale__it"
          >
            <BsArrowLeft className="previous__icon animate__animated scale__it" />{" "}
            Previous
          </button>
          <button
            onClick={() => setPage((pre) => pre + 1)}
            disabled={data.pagination.has_nex_page === false}
            className="animate__animated scale__it"
          >
            Next <BsArrowRight className="next__icon" />
          </button>
        </div>
        <div className="episodesCard animate__animated animate__fadeInUp">
          {data.data.map((epData) => (
            <EpisodeCard epdata={epData} key={`${epData.episode}_`} />
          ))}
        </div>
        <div className="next_pre animate__animated scale__it">
          <button
            disabled={page <= 1}
            onClick={() => setPage((pre) => pre - 1)}
            className="animate__animated scale__it"
          >
            <BsArrowLeft className="previous__icon" /> Previous
          </button>
          <button
            onClick={() => setPage((pre) => pre + 1)}
            disabled={data.pagination.has_nex_page === false}
            className="animate__animated scale__it"
          >
            Next <BsArrowRight className="next__icon" />
          </button>
        </div>
      </Div>
    );
  }
}

export default Episodes;

const Div = styled.div`
  padding: 10px;
  .next_pre {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;

    button {
      outline: none;
      border: none;
      padding: 5px;
      width: fit-content;
      min-width: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      margin-bottom: 20px;
      cursor: pointer;
      background-color: #000000c4;
      color: gold;
      box-shadow: 1px 2px 10px #ffeb3b54;
    }
    svg.next__icon,
    svg.previous__icon {
      color: gold;
      width: 25px;
      height: 25px;
      margin-left: 10px;
    }
    svg.previous__icon {
      margin-right: 10px;
    }
  }
  &.loading {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .episodesCard {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  h1 {
    color: gold;
    margin-bottom: 20px;
    text-align: center;
  }
`;
