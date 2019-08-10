import styled from "styled-components";

const Texto = styled.Text(props => ({
  fontWeight: props.negrito ? "bold" : "normal",
  fontSize: props.tamanho || 15,
  textAlign: props.centralizado ? "center" : "left"
}));

export default Texto;
