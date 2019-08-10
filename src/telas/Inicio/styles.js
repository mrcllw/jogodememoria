import styled from "styled-components";

export const Container = styled.KeyboardAvoidingView({
  flex: 1,
  backgroundColor: "#f5f5f5",
  justifyContent: "center",
  alignItems: "center",
  padding: 30
});

export const Input = styled.TextInput({
  height: 46,
  alignSelf: "stretch",
  backgroundColor: "#ffffff",
  borderWidth: 1,
  borderColor: "#dddddd",
  borderRadius: 4,
  marginTop: 20,
  paddingHorizontal: 15
});
