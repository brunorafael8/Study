import React from 'react';
import styled from 'styled-components';
import UserImg from '../../assets/userPicture.png';

export interface Props {
  toggleTheme: () => void;
  theme: string;
}

const Container = styled.div`
  height: 6vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

`;

const User = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  display: flex;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.onPrimary};
`;

const UserPicture = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 25px;
  margin-right: 24px;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
  margin-left: 19px;
  width: 58px;
  height: 30px;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 58px;
  height: 30px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 21px;
    height: 21px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #339cf7;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 21px;
      height: 21px;
      margin-left: 32px;
      transition: 0.2s;
    }
  }
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
`;

const Header = (props: Props) => {
  const { toggleTheme, theme } = props;
  return (
    <Container>
      <User>
        <UserPicture src={UserImg} alt="picture" />
        Olá, João Paulo
      </User>
      <ChangeButton>
        Modo Escuro
        <CheckBoxWrapper>
          <CheckBox
            id="checkbox"
            type="checkbox"
            checked={theme === 'light' ? false : true}
            onChange={() => toggleTheme()}
          />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
      </ChangeButton>
    </Container>
  );
};

export default Header;
