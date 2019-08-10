import styled from "styled-components";

export const Container = styled.View({
  flex: 1,
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "#f5f5f5"
});

export const Cartas = styled.View({
  flex: 1,
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center"
});

export const Carta = styled.TouchableOpacity({
  borderWidth: 0.5,
  borderRadius: 5,
  height: 70,
  width: 50,
  backgroundColor: "#ffffff",
  margin: 10,
  alignItems: "center",
  justifyContent: "center"
});
