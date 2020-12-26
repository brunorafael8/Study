import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { useTheme } from '../context/ThemeContext';

const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primary};
  height: 100vh;
  padding: 20px 20px;
  box-sizing: border-box;
`;

function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Container>
      <Header theme={theme} toggleTheme={toggleTheme} />
    </Container>
  );
}

export default Home;
