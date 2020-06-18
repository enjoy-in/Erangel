import styled from 'styled-components';

export const SearchWrapper = styled.div`
  width: 940px;
  position: relative;
  left: 490px;
`;

export const Box = styled.form`
  position: relative;
  top: -50px;
  width: 940px;
  height: 100px;
  background-color: #ffffff;
  box-shadow: 15px 25px 20px #d7d7d7;
  input {
    width: 460px;
    height: 50px;
    position: relative;
    top: 25px;
    margin-left: 160px;
    border: solid 1px #c4c4c4;
    background: none;
    outline: none;
    font-size: 16px;
    padding-left: 30px;
    &::placeholder {
      color: #919191;
    }
  }
  button {
    width: 140px;
    height: 50px;
    position: relative;
    top: 25px;
    margin-left: 20px;
    background-color: #fab514;
    outline: none;
    border: none;
    font-size: 16px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const Text = styled.h1`
  position: relative;
  top: 40px;
  font-size: 1.625rem;
  font-weight: 800;
  color: #727375;
  text-align: center;
`;

export const Line = styled.div`
  position: relative;
  top: 70px;
  left: 50%;
  margin-left: -70px;
  width: 140px;
  border-bottom: 1px solid #727375;
`;
