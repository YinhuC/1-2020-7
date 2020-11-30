import styled, { keyframes } from "styled-components";
import image from "../../../Images/3746-Ahuriri-Valley-North-Otago-Shaun-Jeffers.JPG";
import image1 from "../../../Images/0914-Castlepoint-Wairarapa-Daniel-Rood-min.jpg";
import image2 from "../../../Images/48-Milford-Sound-Will-Patino-min.jpg";
import image3 from "../../../Images/0013-Springfield-Canterbury-Matt-Crawford-min.jpg";
import image4 from "../../../Images/8399-Wanaka-Miles-Holden-min.jpg";
import image5 from "../../../Images/45-Aoraki-Lake-Pukaki-Will-Patino-min.jpg";

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

export const BackgroundImage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  /* The image used */
  background-image: url(${image});

  /* Full height */
  height: 100vh;
  width: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* Change background Image
  transition: 5s;

  animation-name: ${animate};
  animation-direction: forwards;
  animation-duration: 30s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-play-state: running;
  animation-timing-function: ease-in-out; */
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;

  width: 100%;

  color: #fff;
  font-weight: bolder;
  font-size: 30px;
  margin: 6% 10% 6% 10%;
`;
