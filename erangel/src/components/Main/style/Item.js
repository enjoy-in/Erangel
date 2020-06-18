import styled from 'styled-components';

export const ItemWrapper = styled.div`
  margin-bottom: 50px;
  flex-basis: 25%;
`;

export const Image = styled.div`
  width: 220px;
  height: 220px;
  background-color: #c4c4c4;
  cursor: pointer;
`;

export const Name = styled.div`
  width: 220px;
  height: 43px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: -43px;
  cursor: pointer;
  p {
    font-family: NanumSquare;
    font-size: 17px;
    color: #ffffff;
    text-align: center;
    padding-top: 12px;
    margin: 0;
  }
`;

export const Price = styled.div`
  width: 220px;
  padding: 10px 0 10px 0;
  margin: 0;
`;

export const MinPrice = styled.p`
  font-family: NanumSquare;
  font-size: 14px;
  margin: 0;
  color: #7b7b7b;
  font-weight: 600;
  text-align: right;
  p {
    display: inline;
    color: #fab514;
    font-size: 17px;
  }
`;

export const MaxPrice = styled.p`
  font-family: NanumSquare;
  font-size: 11px;
  margin: 0;
  color: #7b7b7b;
  text-align: right;
`;