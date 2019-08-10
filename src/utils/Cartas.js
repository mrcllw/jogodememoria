import _ from "lodash";

const cartas = _.range(1, 11).map(valor => ({ valor, verValor: false }));

export default function obterCartas() {
  const paresDeCartas = [...cartas, ...cartas];
  return _embaralharCartas(paresDeCartas);
}

function _embaralharCartas(cartas) {
  return _.shuffle(cartas);
}
