import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Results(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const userData = async () => {
      try {
        const { data } = await axios?.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_xkmVukvrZspLLTw9G0WK7EMy9DKLy&ipAddress=${props.search}`
        );
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    userData();
  }, [props.search]);

  if (!data) return null;
  console.log(data);
  return (
    <ResultsContainer>
      <Datas>
        <Headding>IP ADDRESS</Headding>
        <Result>{data.ip}</Result>
      </Datas>
      <Datas>
        <Headding>LOCATION</Headding>
        <Result>
          {data.location.city}, {data.location.country}{" "}
          {data.location.postalCode}
        </Result>
      </Datas>
      <Datas>
        <Headding>TIMEZONE</Headding>
        <Result>UTC {data.location.timezone}</Result>
      </Datas>
      <Datas>
        <Headding>ISP</Headding>
        <Result>{data.isp}</Result>
      </Datas>
    </ResultsContainer>
  );
}

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 26px;
  background: #ffffff;
  box-shadow: 0px 50px 50px -25px rgba(0, 0, 0, 0.0983665);
  border-radius: 15px;
  width: 100%;
`;
const Datas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const Headding = styled.h4`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.45833px;
  color: #2c2c2c;
  mix-blend-mode: normal;
  opacity: 0.5;
`;
const Result = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.178571px;
  color: #2c2c2c;
`;
