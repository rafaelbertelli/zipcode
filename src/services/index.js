/* eslint-disable no-debugger */
const axios = require('axios');
const jsonpAdapter = require('axios-jsonp');

export const getAddress = zipcode =>
  axios({
    url: `https://viacep.com.br/ws/${zipcode}/json/?callback=myfn`,
    adapter: jsonpAdapter,
  })
    .then(res => {
      debugger;
      if (res.status !== 200) {
        return Promise.reject(new Error('Não foi possível localizar este cep.'));
      }

      const { cep, logradouro, bairro, localidade, uf } = res.data;

      const completeAddress = {
        zip: cep,
        address: logradouro,
        neighborhood: bairro,
        city: localidade,
        state: uf,
      };

      debugger;

      return Promise.resolve(completeAddress);
    })
    .catch(err => {
      debugger;
      console.error(err.message);
      return Promise.reject(new Error('Não foi possível localizar este cep.'));
    });
