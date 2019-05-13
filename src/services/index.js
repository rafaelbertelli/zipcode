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
  const zipDigits = zipcode.replace(/-/g, '').replace(/\s/g, '');
  const zipLength = zipDigits.length;

  if (zipLength === 0) {
    return Promise.reject('O campo CEP está vazio');
  }

  if (zipLength < 8) {
    return Promise.reject('O CEP está incompleto');
  }

  if (zipLength > 8) {
    return Promise.reject('O CEP tem digitos além do esperado');
  }

  if (!Number(zipDigits)) {
    return Promise.reject('O CEP está num formato inválido');
  }

  return axios({
    url: `https://viacep.com.br/ws/${zipDigits}/json/?callback=myfn`,
    adapter: jsonpAdapter,
  })
    .then(async res => {
      if (res.status !== 200 || res.data.erro) {
        return Promise.reject(new Error('Não foi possível localizar este cep.'));
      }

      const { cep, logradouro, bairro, localidade, uf } = res.data;

      let latLng = { lat: -22.5937, lng: -46.5277 };
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
