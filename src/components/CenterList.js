import React from 'react';
import styled from 'styled-components';
import CenterItem from './CenterItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px){
      width: 100%;
      padding-left: 1rem;
      padding-right: 1rem'
  }
`;

const CenterList = ({ centers, loadingCenters }) => {
  if (!centers) {
    return null;
  }

  return (
    <NewsListBlock>
      {loadingCenters && '로딩중 . . .'}
      {!loadingCenters &&
        centers.map((center) => <CenterItem key={center.id} center={center} />)}
    </NewsListBlock>
  );
};

export default CenterList;