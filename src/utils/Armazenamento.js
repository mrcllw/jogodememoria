import _ from "lodash";
import AsyncStorage from "@react-native-community/async-storage";

export async function guardar(chave, valor) {
  await AsyncStorage.setItem(chave, JSON.stringify(valor));
}

export async function obter(chave) {
  const dados = await AsyncStorage.getItem(chave);
  if (_.isNil(dados)) return [];
  return JSON.parse(dados);
}

export async function remover(chave) {
  await AsyncStorage.removeItem(chave);
}
