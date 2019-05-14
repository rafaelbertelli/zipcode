import styled from 'styled-components';

export const MapComponent = styled.div`
  border: 2px solid #c7c7c7;
  padding: 20px;
  position: relative;
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  height: 20px;
  opacity: 0.3;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    background-color: #333;
    content: ' ';
    height: 20px;
    left: 10px;
    position: absolute;
    top: 0;
    width: 2px;
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
