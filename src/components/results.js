import styled from "styled-components";

export default function Results(props) {
  return (
    <ResultsContainer>
      <Datas>
        <Headding>IP ADDRESS</Headding>
        <Result> {props.data.ip}</Result>
      </Datas>
      <Datas>
        <Headding>LOCATION</Headding>
        <Result>
          {props.data.location.city}, {props.data.location.country}{" "}
          {props.data.location.postalCode}
        </Result>
      </Datas>
      <Datas>
        <Headding>TIMEZONE</Headding>
        <Result>UTC {props.data.location.timezone}</Result>
      </Datas>
      <Datas>
        <Headding>ISP</Headding>
        <Result>{props.data.isp} Magticom</Result>
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
  @media (min-width: 1000px) {
    width: 77%;
    padding: 37px 32px;
    flex-direction: row;
    margin-top: 30px;
    justify-content: space-between;
  }
`;
const Datas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  @media (min-width: 1000px) {
    gap: 13px;
  }
`;
const Headding = styled.h4`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 1.45833px;
  color: #2c2c2c;
  mix-blend-mode: normal;
  opacity: 0.5;
  @media (min-width: 1000px) {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 1.75px;
    text-transform: uppercase;
    text-align: left;
    margin: 0;
  }
`;
const Result = styled.span`
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.178571px;
  color: #2c2c2c;
  @media (min-width: 1000px) {
    font-size: 26px;
    line-height: 30px;
    letter-spacing: -0.232143px;
    text-align: left;
    margin: 0;
  }
`;
