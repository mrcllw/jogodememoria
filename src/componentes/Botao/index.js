import React from "react";
import { Container, TextoDoBotao } from "./styles";

export default function Botao({ aoPressionar, texto }) {
  return (
    <Container onPress={aoPressionar}>
      <TextoDoBotao>{texto}</TextoDoBotao>
    </Container>
  );
}
