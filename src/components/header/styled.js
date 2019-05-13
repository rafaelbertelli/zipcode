import styled from 'styled-components';

export const HeaderComponent = styled.div`
  background-color: #c7c7c7;
  padding: 25px;
  color: #495057;
  margin-bottom: 15px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  height: 35px;
  width: 200px;
  margin: 0 10px 10px;
  padding: 0px 10px;
  box-sizing: content-box;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  border: 1px solid #ced4da;
  border-radius: 3px;

  @media screen and (max-width: 425px) {
    width: 90px;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  background-color: #007bff;
  border-color: #007bff;
  border: 1px solid transparent;
  padding: 8px 15px;
  border-radius: 3px;
  margin-bottom: 10px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover:not(:disabled) {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }

  &:disabled {
    background: #dddddd;
  }
`;
