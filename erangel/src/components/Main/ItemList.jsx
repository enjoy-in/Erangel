import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const items = [
  {
    name: '예산시 사과농장',
    min: '50,000',
    max: '100,000',
    id: 0,
  },
  {
    name: '예산 오미자',
    min: '50,000',
    max: '100,000',
    id: 1,
  },
  {
    name: '대마고 농장',
    min: '50,000',
    max: '100,000',
    id: 2,
  },
  {
    name: '예린이네 농장',
    min: '50,000',
    max: '100,000',
    id: 3,
  },
  {
    name: '박예린 천재',
    min: '50,000',
    max: '100,000',
    id: 4,
  },
  {
    name: '한화이글스 파크',
    min: '50,000',
    max: '100,000',
    id: 5,
  },
  {
    name: '채은이네 공원',
    min: '50,000',
    max: '100,000',
    id: 6,
  },
  {
    name: '미스터 필준',
    min: '50,000',
    max: '100,000',
    id: 7,
  },
  {
    name: '관평동 박박이네',
    min: '50,000',
    max: '100,000',
    id: 8,
  },
  {
    name: '지은이네 전주비빔밥',
    min: '50,000',
    max: '100,000',
    id: 9,
  },
  {
    name: '곧 망할 것 같은 집',
    min: '50,000',
    max: '100,000',
    id: 10,
  },
];

const ListsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  top: 130px;
`;

const ItemList = () => {
  return (
    <ListsWrapper>
      {items.map((item) => (
        <Item info={item} key={item.id} />
      ))}
    </ListsWrapper>
  );
};

export default ItemList;
