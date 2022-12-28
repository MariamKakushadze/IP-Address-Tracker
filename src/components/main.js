import styled from "styled-components";
import bg from "../images/pattern-bg.png";
import search from "../images/icon-arrow.svg";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  return (
    <Wrapper>
      <Title>IP Address Tracker</Title>
      <Form onSubmit={searchHandler} autoComplete="off">
        <SearchInput
          type="search"
          id="search"
          placeholder="Search for any IP address"
        />
        <SearchBtn type="submit"></SearchBtn>
      </Form>
    </Wrapper>
  );
}
const Form = styled.form`
  position: relative;
`;

const Wrapper = styled.section`
  background: url(${bg});
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Title = styled.h1`
  font-size: 26px;
  line-height: 30px;
  letter-spacing: -0.232143px;
  color: #ffffff;
  margin: 0;
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
`;
