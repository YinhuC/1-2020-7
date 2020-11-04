import styled from "styled-components";
import image from "../../../Images/3746-Ahuriri-Valley-North-Otago-Shaun-Jeffers.JPG";

export const BackgroundImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* The image used */
  background-image: url(${image});

  /* Full height */
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
