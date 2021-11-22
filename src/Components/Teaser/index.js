/* Third Party */
import React, { useContext, useState } from 'react';
import {
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
} from 'shards-react';
import { Teaser, TextBody, CustomCardImg } from './style';
import CursorContext from '../Cursor/Context/CursorContext';
import { gsap } from 'gsap';

/* Components */
import {
  expandedLeft,
  expandedMiddle,
  expandedRight,
  shrunk,
} from './constants';

/* Functions */

function CustomTeaser({ image, header, title, text, footer, url, imageId }) {
  const { setType } = useContext(CursorContext);
  const [state, setState] = useState(false);

  const modID = (parseInt(imageId.split('-')[1]) + 1) % 3;

  console.log();

  const handleExpand = () => {
    if (window.innerWidth >= 1200) {
      if (modID === 0) gsap.to(`#${imageId}`, expandedRight);
      else if (modID === 1) gsap.to(`#${imageId}`, expandedLeft);
      else gsap.to(`#${imageId}`, expandedMiddle);
      setState(true);
    }
  };

  const handleShrink = () => {
    if (window.innerWidth >= 1200) {
      if (modID === 0) gsap.to(`#${imageId}`, shrunk);
      else if (modID === 1) gsap.to(`#${imageId}`, shrunk);
      else gsap.to(`#${imageId}`, shrunk);
      setState(false);
    }
  };

  return (
    <Teaser>
      <CardHeader>{header}</CardHeader>
      <CustomCardImg
        onMouseEnter={() => setType('expand')}
        onMouseLeave={() => setType('default')}
        id={imageId}
        onClick={state !== true ? handleExpand : handleShrink}
        src={image}
      />
      <CardBody className='d-flex flex-column'>
        <CardTitle>{title}</CardTitle>
        <TextBody>{text}</TextBody>
        <Button
          onMouseEnter={() => setType('expand')}
          onMouseLeave={() => setType('default')}
          href={url}
          target='_blank'
          className='mt-auto'
        >
          Read more &rarr;
        </Button>
      </CardBody>
      <CardFooter>{footer}</CardFooter>
    </Teaser>
  );
}

export default CustomTeaser;
