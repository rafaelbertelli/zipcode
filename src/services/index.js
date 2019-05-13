/* eslint-disable no-debugger */
const axios = require('axios');
const jsonpAdapter = require('axios-jsonp');

export const getAddress = zipcode => {
  if (!zipcode) {
    return Promise.reject(new Error('O campo CEP está vazio'));
  }

  return axios({
    url: `https://viacep.com.br/ws/${zipcode}/json/?callback=myfn`,
    adapter: jsonpAdapter,
  })
    .then(res => {
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

      return Promise.resolve(completeAddress);
    })
    .catch(err => {
      console.error(err.message);
      return Promise.reject(new Error('Não foi possível localizar este cep.'));
    });
};
