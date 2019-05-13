import styled from 'styled-components';

export const MapComponent = styled.div`
  border: 2px solid #c7c7c7;
  padding: 20px;
  position: relative;
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    content: ' ';
    top: 0;
    left: 10px;
    height: 20px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:active {
    opacity: 0.3;
  }
`;

export const SuperScription = styled.div`
  margin-bottom: 25px;

  p:first-of-type {
    line-height: 28px;
  }

  p {
    line-height: 18px;
  }
`;
