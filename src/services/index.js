const axios = require('axios');
const jsonpAdapter = require('axios-jsonp');

const uriParser = ({ cep, logradouro, bairro, localidade, uf }) => {
  let partials = [];

  !!cep && partials.push(cep);
  !!logradouro && partials.push(logradouro);
  !!bairro && partials.push(bairro);
  !!localidade && partials.push(localidade);
  !!uf && partials.push(uf);

  const formatedUri = encodeURIComponent(partials.toString());

  return formatedUri;
};

const getLatLong = ({ cep, logradouro, bairro, localidade, uf }) => {
  const uri = uriParser({ cep, logradouro, bairro, localidade, uf });

  return axios({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${uri}&key=${
      process.env.GEOCODE_KEY
    }`,
  })
    .then(res => res.data.results[0].geometry.location)
    .catch(Promise.reject);
};

export const getAddress = zipcode => {
  if (!zipcode) {
    return Promise.reject(new Error('O campo CEP está vazio'));
  }

  return axios({
    url: `https://viacep.com.br/ws/${zipcode}/json/?callback=myfn`,
    adapter: jsonpAdapter,
  })
    .then(async res => {
      if (res.status !== 200) {
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
