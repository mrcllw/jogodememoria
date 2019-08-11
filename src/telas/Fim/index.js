import React, { useState, useEffect } from "react";
import * as Armazenamento from "../../utils/Armazenamento";
import Titulo from "../../componentes/Titulo";
import Texto from "../../componentes/Texto";
import Botao from "../../componentes/Botao";
import { Container, Ranking, ItemDaLista } from "./styles";

export default function Fim({ navigation }) {
  const rodadas = navigation.getParam("rodadas");
  const [rank, definirRank] = useState([]);

  useEffect(() => {
    async function obterRank() {
      const rank = await Armazenamento.obter("rank");
      definirRank(rank);
    }
    obterRank();
  }, []);

  function jogarNovamente() {
    navigation.goBack();
  }

  function outroJogador() {
    navigation.popToTop();
  }

  return (
    <Container>
      <Titulo texto={`Você descobriu todos os pares em ${rodadas} rodadas!`} />
      <Botao aoPressionar={jogarNovamente} texto="Jogar novamente" />
      <Botao aoPressionar={outroJogador} texto="Outro jogador" />
      <Ranking
        keyExtractor={(item, index) => index.toString()}
        data={rank}
        renderItem={({ item, index }) => (
          <ItemDaLista>
            <Texto>{`${item.jogador} ${index == 0 ? "👑" : ""} `}</Texto>
            <Texto>{`${item.rodadas} rodadas`}</Texto>
          </ItemDaLista>
        )}
        ListHeaderComponent={
          <Texto negrito centralizado>
            Ranking
          </Texto>
        }
      />
    </Container>
  );
}
