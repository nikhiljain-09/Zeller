import Home from "./screens/Home/Home";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
`;

export default App;
