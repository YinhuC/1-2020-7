import styled from 'styled-components';
import { Card, CardImg } from 'shards-react';

export const Teaser = styled(Card)`
  height: 100%;

  display: flex;
  align-items: flex-start;
`;

export const TextBody = styled.div`
  padding-bottom: 20px;
`;

export const CustomCardImg = styled(CardImg)`
  width: 100%;
`;
