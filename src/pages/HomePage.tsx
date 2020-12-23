import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.primary};
  height: 100vh;
`;

const ChangeButton = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme: { colors } }) => colors.onPrimary};
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    margin-left: 19px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Container>
      <ChangeButton>
        Modo Escuro
        <label className="switch">
          <input type="checkbox" checked={theme === 'light' ? false : true} onChange={() => toggleTheme()} />
          <span className="slider round"></span>
        </label>
      </ChangeButton>
    </Container>
  );
}

export default Home;
