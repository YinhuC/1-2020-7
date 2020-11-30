import styled, { keyframes } from "styled-components";
import image from "../../../Images/3746-Ahuriri-Valley-North-Otago-Shaun-Jeffers.JPG";
import image1 from "../../../Images/0914-Castlepoint-Wairarapa-Daniel-Rood-min.jpg";
import image2 from "../../../Images/48-Milford-Sound-Will-Patino-min.jpg";
import image3 from "../../../Images/0013-Springfield-Canterbury-Matt-Crawford-min.jpg";
import image4 from "../../../Images/8399-Wanaka-Miles-Holden-min.jpg";
import image5 from "../../../Images/45-Aoraki-Lake-Pukaki-Will-Patino-min.jpg";
import { Container } from "reactstrap";

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  z-index: -1;
`;

export const VideoContainer = styled.div`
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BackgroundContainer = styled.div`
  border: 0.1px solid black;

  /* Full height */
  height: 100vh;
  width: 100%;
`;

export const HeaderContainer = styled.h1`
  user-select: none;
  width: 100%;
  color: white;
  height: 150px;
`;

export const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const animate = keyframes`
  /* Background Images, preloading to avoid flicker*/
  0% {
    background-image: url(${image}), url(${image1})
  }  20% {
    background-image: url(${image1}), url(${image2})
  }  40% {
    background-image: url(${image2}), url(${image3})
  }  60% {
    background-image: url(${image3}), url(${image4})
  }  80% {
    background-image: url(${image4}), url(${image5})
  }  100% {
    background-image: url(${image5}), url(${image})
  }
`;

/* Center and scale the image nicely */
/* background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */

/* Change background Image
  transition: 5s;

  animation-name: ${animate};
  animation-direction: forwards;
  animation-duration: 30s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-play-state: running;
  animation-timing-function: ease-in-out; */
