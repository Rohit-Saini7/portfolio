import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
