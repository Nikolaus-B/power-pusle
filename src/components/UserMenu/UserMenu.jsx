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
  Photo,
} from './UserMenu.styled';
import { useMediaQuery } from 'react-responsive';
import { fetchUserLogout } from '../../redux/user/operations';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useHook } from 'hooks/AuthHook';

import AvatarPlug from '../../img/AvatarPlug.svg';
import { Image } from '@chakra-ui/react';

export const UserMenu = () => {
  const { user } = useHook();
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
          <Icon iconid="settings" width={24} height={24} />
        </SettingLink>
        <AvatarHeader>
          <Image
            as={Photo}
            src={
              user?.avatarURL
                ? [`https://power-pulse-back.onrender.com/${user.avatarURL}`]
                : [AvatarPlug]
            }
            w={user?.avatarURL !== '' ? '46px' : '24px'}
            h={user?.avatarURL !== '' ? '46px' : '24px'}
          />
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
