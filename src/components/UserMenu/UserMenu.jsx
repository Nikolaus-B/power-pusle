import { Icon } from 'components/Icon/Icon';
import { useEffect, useState } from 'react';
import {
  UserContainer,
  NavContainer,
  StyledNavLink,
  UserData,
  AvatarHeader,
  LogOutBtn,
  SettingLink,
  LogOutText,
  //   Photo,
} from './UserMenu.styled';
import { useMediaQuery } from 'react-responsive';
import { fetchUserLogout } from '../../redux/user/operations';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const UserMenu = () => {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  const location = useLocation();
  const [isActivePage, setIsActivePage] = useState('');
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(fetchUserLogout());

  const handleActivePage = name => {
    setIsActivePage(name);
  };

  useEffect(() => {
    const determineActivePage = () => {
      const pathname = location.pathname;
      if (pathname === '/diary') {
        setIsActivePage('diary');
      } else if (pathname === '/products') {
        setIsActivePage('products');
      } else if (pathname === '/exercises') {
        setIsActivePage('exercises');
      }
    };

    determineActivePage();
  }, [location.pathname]);

  return (
    <UserContainer>
      <NavContainer>
        <StyledNavLink
          style={
            isActivePage === 'diary' && location.pathname !== '/settings'
              ? {
                  backgroundColor: 'var(--orange-color)',
                  border: '1px solid transparent',
                }
              : { backgroundColor: 'transparent' }
          }
          onClick={() => handleActivePage('diary')}
          to="/diary"
        >
          Diary
        </StyledNavLink>
        <StyledNavLink
          style={
            isActivePage === 'products' && location.pathname !== '/settings'
              ? {
                  backgroundColor: 'var(--orange-color)',
                  border: '1px solid transparent',
                }
              : { backgroundColor: 'transparent' }
          }
          onClick={() => handleActivePage('products')}
          to="/products"
        >
          Products
        </StyledNavLink>
        <StyledNavLink
          style={
            isActivePage === 'exercises' && location.pathname !== '/settings'
              ? {
                  backgroundColor: 'var(--orange-color)',
                  border: '1px solid transparent',
                }
              : { backgroundColor: 'transparent' }
          }
          onClick={() => handleActivePage('exercises')}
          to="/exercises"
        >
          Exercises
        </StyledNavLink>
      </NavContainer>

      <UserData>
        <SettingLink to="/settings">
          <Icon iconid={'settings'} width={24} height={24} />
        </SettingLink>
        <AvatarHeader>
          {/* <Photo src={} width={46} height={46} alt="Avatar" /> */}
        </AvatarHeader>

        {isDesktop && (
          <LogOutBtn type="button" onClick={handleLogOut}>
            <LogOutText>Logout</LogOutText>
            <Icon iconid={'log-out'} width={20} height={20} />
          </LogOutBtn>
        )}
      </UserData>
    </UserContainer>
  );
};

{
  /* <Image
  src={
    user
      ? `https://power-pulse-back.onrender.com/${user.avatarURL}`
      : 'no-image'
  }
  w={[100, 150, 150]}
  h={[100, 150, 150]}
  color="rgba(239, 237,232, 0.1)"
/>; */
}
