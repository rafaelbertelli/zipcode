import styled from 'styled-components';

export const HeaderComponent = styled.div`
  background-color: #c7c7c7;
  color: #495057;
  margin-bottom: 15px;
  padding: 25px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  @media screen and (max-width: 425px) {
    width: 90px;
  }

  border: 1px solid #ced4da;
  border-radius: 3px;
  box-sizing: content-box;
  font-family: inherit;
  font-size: inherit;
  height: 35px;
  line-height: inherit;
  margin: 0 10px 10px;
  padding: 0px 10px;
  width: 200px;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  border: 1px solid transparent;
  border-color: #007bff;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin-bottom: 10px;
  padding: 8px 15px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover:not(:disabled) {
    background-color: #0069d9;
    border-color: #0062cc;
    color: #fff;
  }

  &:disabled {
    background: #dddddd;
  }
`;
