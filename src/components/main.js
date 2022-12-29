import styled from "styled-components";
import bg from "../images/pattern-bg.png";
import search from "../images/icon-arrow.svg";
import { useState, useEffect } from "react";
import Results from "./results";
import Map from "./map";
import axios from "axios";

export default function Main() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);

  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  useEffect(() => {
    const userData = async () => {
      try {
        const { data } = await axios?.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_xkmVukvrZspLLTw9G0WK7EMy9DKLy&ipAddress=${search}`
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    userData();
  }, [search]);

  if (!data) return null;

  return (
    <>
      <Wrapper
        style={{
          zIndex: "2",
        }}
      >
        <Title>IP Address Tracker</Title>
        <Form onSubmit={searchHandler} autoComplete="off">
          <SearchInput
            type="search"
            id="search"
            placeholder="Search for any IP address"
          />
          <SearchBtn type="submit"></SearchBtn>
        </Form>
        <Results
          search={search}
          setSearch={setSearch}
          data={data}
          setData={setData}
        />
      </Wrapper>
      <Map data={data} />
    </>
  );
}
const Form = styled.form`
  position: relative;
`;

const Wrapper = styled.section`
  background: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-height: 300px;
  height: 35vh;
  position: relative;
  z-index: "2";
  @media (min-width: 1000px) {
    gap: 30px;
  }
`;

const Title = styled.h1`
  font-size: 26px;
  line-height: 30px;
  letter-spacing: -0.232143px;
  color: #ffffff;
  margin: 0;
  @media (min-width: 1000px) {
    font-size: 32px;
    line-height: 30px;
    letter-spacing: -0.285714px;
  }
`;

const SearchBtn = styled.button`
  position: absolute;
  right: 0;
  width: 58px;
  height: 59px;
  background-color: #000000;
  border-style: none;
  outline: none;
  border-radius: 0px 15px 15px 0px;
  cursor: pointer;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: left 50% top 50%;
  padding: 0;
  &:hover,
  &:active {
    background-color: #3f3f3f;
  }
  right: -1px;
  top: -0.5px;
`;
const SearchInput = styled.input`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #2c2c2c;
  border-radius: 15px;
  border-style: none;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.0983665);
  padding: 18px;
  width: 327px;
  height: 58px;
  cursor: pointer;
  outline: none;
  font-size: 32px;
  @media (min-width: 1000px) {
    width: 555px;
    padding: 18px 24px;
  }
`;
