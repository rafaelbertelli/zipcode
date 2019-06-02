import React from 'react';
import PropTypes from 'prop-types';
import { HeaderComponent, Title, Form, Label, Input, Button } from './styles';

const Header = props => (
  <HeaderComponent>
    <Title>Consultar</Title>
    <Form>
      <Label>CEP</Label>
      <Input
        className="input"
        name="zipcode"
        type="text"
        onChange={props.handleInput}
        value={props.zipcode}
        mask="99999-999"
        maskChar={null}
      />
      <Button
        className="button"
        type="submit"
        onClick={props.handleSearch}
        disabled={props.isLoading}
      >
        Buscar
      </Button>
    </Form>
  </HeaderComponent>
);

Header.propTypes = {
  handleInput: PropTypes.func,
  handleSearch: PropTypes.func,
  zipcode: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Header;
