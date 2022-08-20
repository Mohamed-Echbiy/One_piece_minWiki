import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import StaffCard from "./StaffCard";

function Staff() {
  const fetchStaff = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/21/staff`);
    const data = await res.json();
    return data.data;
  };
  const { data, isLoading } = useQuery(["satff"], fetchStaff);
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
  return (
    <Div className="animate__animated animate__fadeInUp ">
      {data.map((dato) => (
        <StaffCard data={dato} key={dato.person.name} />
      ))}
    </Div>
  );
}

export default Staff;

const Div = styled.div`
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &.loading {
    align-items: center;
  }
`;
