import React from 'react';
import PropTypes from 'prop-types';

import './styles.less';

const Header = props => (
  <div className="HeaderComponent">
    <h3 className="title">Consultar</h3>
    <form className="form">
      <label className="label">CEP</label>
      <input
        className="input"
        name="zipcode"
        type="text"
        onChange={props.handleInput}
        value={props.zipcode}
      />
      <button className="button" type="submit" onClick={props.handleSearch}>
        Buscar
      </button>
    </form>
  </div>
);

Header.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  zipcode: PropTypes.string,
};

export default Header;
