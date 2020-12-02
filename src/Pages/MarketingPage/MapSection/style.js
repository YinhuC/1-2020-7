import styled from "styled-components";
import map from "../../../Images/nzmap.png";

export const BumperSection = styled.section`
  text-align: center;
  padding: 128px 16px;
  background-color: #efefef;
  user-select: none;
`;

export const MapContainer = styled.div`
  background-image: url(${map});
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 90vh;
  margin: 10vh 0 10vh 0;
`;

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  width: 90%;
`;
