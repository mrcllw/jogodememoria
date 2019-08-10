import React, { useState, useEffect } from "react";
import _ from "lodash";
import obterCartas from "../../utils/Cartas";
import * as Armazenamento from "../../utils/Armazenamento";
import Titulo from "../../componentes/Titulo";
import Texto from "../../componentes/Texto";
import { Container, Cartas, Carta } from "./styles";

export default function Jogo({ navigation }) {
  const [cartas, definirCartas] = useState(obterCartas());
  const [cartasSelecionadas, definirCartasSelecionadas] = useState([]);
  const [rodada, definirRodada] = useState(0);

  useEffect(() => {
    const rodadaFim = rodada + 1;

    async function salvarDadosDoJogador(callback) {
      const nomeDoJogador = obterNomeDoJogador();
      const rank = await Armazenamento.obter("rank");
      const novoRank = [
        ...rank,
        { jogador: nomeDoJogador, rodadas: rodadaFim }
      ];
      const rankOrdenadoPorRodada = _.orderBy(novoRank, ["rodadas", "desc"]);
      await Armazenamento.guardar("rank", rankOrdenadoPorRodada);
      callback();
    }

    const todasCartasEstaoVisiveis = _.every(cartas, carta => carta.verValor);
    if (todasCartasEstaoVisiveis) {
      salvarDadosDoJogador(() => {
        definirCartas(obterCartas());
        definirCartasSelecionadas([]);
        definirRodada(0);
        navigation.navigate("Fim", { rodadas: rodadaFim });
      });
    }
  }, [cartas]);

  useEffect(() => {
    const selecionouDuasCartas = cartasSelecionadas.length == 2;

    if (selecionouDuasCartas) {
      const cartasSaoDiferente = !_.isEqual(
        cartas[cartasSelecionadas[0]],
        cartas[cartasSelecionadas[1]]
      );

      if (cartasSaoDiferente) {
        setTimeout(() => {
          definirCartas(
            cartas.map((carta, indice) =>
              cartasSelecionadas.includes(indice)
                ? { ...carta, verValor: false }
                : carta
            )
          );
        }, 200);
      }
      definirRodada(rodada + 1);
      definirCartasSelecionadas([]);
    }
  }, [cartasSelecionadas]);

  function obterNomeDoJogador() {
    return navigation.getParam("nomeDoJogador");
  }

  function aoSelecionarCarta(indiceDaCarta) {
    definirCartas(
      cartas.map((carta, indice) =>
        indice === indiceDaCarta ? { ...carta, verValor: true } : carta
      )
    );
    definirCartasSelecionadas([...cartasSelecionadas, indiceDaCarta]);
  }

  return (
    <Container>
      <Cartas>
        {cartas.map(({ valor, verValor }, indice) => (
          <Carta
            key={indice}
            disabled={verValor}
            onPress={() => aoSelecionarCarta(indice)}
          >
            <Texto tamanho={20}>{verValor ? valor : "♠"}</Texto>
          </Carta>
        ))}
      </Cartas>
      <Titulo texto={`Rodada ${rodada}`} />
    </Container>
  );
}
