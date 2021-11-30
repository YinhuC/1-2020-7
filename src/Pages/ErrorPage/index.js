/* Third Party */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'shards-react';
import useAxiosFetch from '../../Hooks/useAxiosFetch';

/* Components */
import { BumperSection, ErrorText } from './style';

/* Functions */

function ErrorPage() {
  const { data, isLoading, hasErrored, errorMessage } = useAxiosFetch({
    categories: `"NATURE"`,
    lat: -36.8845312,
    long: 174.7535262,
    maxRadius: 50000,
  });
  if (hasErrored) return <div>{errorMessage}</div>;

  if (isLoading || !data) return <div>Loading...</div>;

  console.log(data);

  return (
    <BumperSection>
      <Container>
        <Row className='d-flex flex-column'>
          <Col>
            <ErrorText>Error, 404 Page not found...</ErrorText>
            <ErrorText>I think you went the wrong way.</ErrorText>
          </Col>
          <Col className='mt-5'>
            <Link to='/'>
              <Button theme='light' size='lg'>
                Back to exploring
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </BumperSection>
  );
}

export default ErrorPage;
