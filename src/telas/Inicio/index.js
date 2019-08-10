import React, { useState } from "react";
import { Platform } from "react-native";
import Titulo from "../../componentes/Titulo";
import Botao from "../../componentes/Botao";
import { Container, Input } from "./styles";

export default function Inicio({ navigation }) {
  const [nome, definirNome] = useState("");

  function aoPressionarBotao() {
    if (nome.length == 0) return;
    navigation.navigate("Jogo", { nomeDoJogador: nome });
  }

  return (
    <Container behavior="padding" enabled={Platform.OS === "ios"}>
      <Titulo texto="Jogo da memória" />
      <Input
        autoCorrect={false}
        placeholder="Digite seu nome"
        placeholderTextColor="#999999"
        onChangeText={definirNome}
        returnKeyType="done"
        onSubmitEditing={aoPressionarBotao}
      />
      <Botao aoPressionar={aoPressionarBotao} texto="Começar" />
    </Container>
  );
}
