import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 1;
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 200px;
  padding: 19px 20px 21px 20px;
  background-color: var(--orange-color);
  z-index: 2;
  opacity: 1;
  transition: opacity 0.3s ease;

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    width: 350px;
    padding: 26px 32px 32px 32px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 19px;
  right: 20px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 26px;
    right: 32px;
    width: 32px;
    height: 32px;
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const Logout = styled.button`
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  gap: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.33;
  color: rgba(239, 237, 232, 1);
  border: none;
  outline: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    bottom: 32px;
    left: 32px;
    padding: 0;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 245px;
  margin-bottom: 382px;
`;

export const NavMenuLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  padding: 10px 27px;
  color: rgba(239, 237, 232, 1);
  border-radius: 12px;
  border: 1px solid
    ${props =>
      props.active ? 'var(--white-color)' : 'rgba(239, 237, 232, 0.2)'};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover,
  :focus {
    border: 1px solid var(--white-color);
  }
`;

export const LogoutSvg = styled.svg`
  width: 20px;
  height: 20px;
`;
