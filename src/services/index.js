/* eslint-disable no-debugger */
const axios = require('axios');
const jsonpAdapter = require('axios-jsonp');

const urnParser = ({ cep, logradouro, bairro, localidade, uf }) => {
  let partials = [];

  !!cep && partials.push(cep);
  !!logradouro && partials.push(logradouro);
  !!bairro && partials.push(bairro);
  !!localidade && partials.push(localidade);
  !!uf && partials.push(uf);

  const formatedUrn = encodeURIComponent(partials.toString());

  return formatedUrn;
};

const getLatLong = ({ cep, logradouro, bairro, localidade, uf }) => {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json';
  const urn = urnParser({ cep, logradouro, bairro, localidade, uf });
  const uri = `${url}?address=${urn}&key=${process.env.GEOCODE_KEY}`;

  return axios({ url: uri })
    .then(res => res.data.results[0].geometry.location)
    .catch(Promise.reject);
};

export const getAddress = zipcode => {
  if (!zipcode) {
    return Promise.reject('O campo CEP está vazio');
  }

  /**
   * @todo
   * validação de permitir somente numero
   */

  return axios({
    url: `https://viacep.com.br/ws/${zipcode}/json/?callback=myfn`,
    adapter: jsonpAdapter,
  })
    .then(async res => {
      if (res.status !== 200 || res.data.erro) {
        return Promise.reject(new Error('Não foi possível localizar este cep.'));
      }

      const { cep, logradouro, bairro, localidade, uf } = res.data;

      let latLng = {};
      try {
        latLng = await getLatLong({ cep, logradouro, bairro, localidade, uf });
      } catch {
        return Promise.reject(new Error('Não foi possível localizar este endereço no mapa.'));
      }

      const completeAddress = {
        zip: cep,
        address: logradouro,
        neighborhood: bairro,
        city: localidade,
        state: uf,
        latLng,
      };

      return Promise.resolve(completeAddress);
    })
    .catch(err => Promise.reject(err.message));
};
