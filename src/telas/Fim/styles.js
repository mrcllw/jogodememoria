import styled from "styled-components";

export const Container = styled.View({
  flex: 1,
  backgroundColor: "#f5f5f5",
  justifyContent: "center",
  alignItems: "center",
  padding: 30
});

export const Ranking = styled.FlatList({
  marginTop: 20,
  alignSelf: "stretch"
});

export const ItemDaLista = styled.View({
  paddingVertical: 5,
  flexDirection: "row",
  justifyContent: "space-between"
});
