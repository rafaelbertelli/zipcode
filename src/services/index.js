const axios = require('axios');

export const getAddress = zipcode =>
  axios
    .get(`https://viacep.com.br/ws/${zipcode}/json`)
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
