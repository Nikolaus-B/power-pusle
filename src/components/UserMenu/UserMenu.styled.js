import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;

  @media (min-width: 1440px) {
    margin-right: 0;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: inherit;
  margin-left: auto;

  @media (max-width: 1439px) {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 27px;
  font-family: Roboto, sans-serif;
  border: 1px solid #303030;
  border-radius: 12px;
  color: #efede8;
  transition: background-color 0.3s ease;
  font-size: 16px;

  &:hover {
    border: 1px solid var(--white-color);
  }
`;

export const UserData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-left: 32px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const SettingLink = styled(NavLink)`
  display: flex;
  svg {
    stroke: #efede8;
    stroke-opacity: 0.3;
  }

  @media (min-width: 768px) {
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const AvatarHeader = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 1px solid var(--orange-color);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const Photo = styled.img`
  border-radius: 100px;
`;

export const LogOutBtn = styled.button`
  background-color: transparent;
  color: #efede8;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0;
  @media (min-width: 1440px) {
    svg {
      stroke: #e6533c;
    }
  }
`;

export const LogOutText = styled.span`
  font-size: 16px;
`;
