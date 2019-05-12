import React from 'react';

import './styles.less';

const Header = () => (
  <div className="HeaderComponent">
    <h3 className="title">Consultar</h3>
    <form>
      <label className="label">CEP</label>
      <input className="input" name="zipcode" type="number" />
      <button className="button" type="submit">
        Buscar
      </button>
    </form>
  </div>
);

export default Header;
