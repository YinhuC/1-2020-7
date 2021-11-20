/* Third Party */
import React, { useContext } from 'react';
import {
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
} from 'shards-react';
import { Teaser, TextBody } from './style';
import CursorContext from '../Cursor/Context/CursorContext';
/* Components */

/* Functions */

function CustomTeaser({ image, header, title, text, footer, url }) {
  const { setType } = useContext(CursorContext);

  return (
    <Teaser>
      <CardHeader>{header}</CardHeader>
      <CardImg src={image} />
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
