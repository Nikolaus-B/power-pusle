import React, { useState, useEffect } from 'react';
import {
  Menu,
  Overlay,
  CloseBtn,
  Logout,
  NavMenu,
  NavMenuLink,
  Svg,
  LogoutSvg,
} from './MobileMenu.styled';
import { useDispatch } from 'react-redux';
import { fetchUserLogout } from '../../redux/user/operations';
import { Icon } from 'components/Icon/Icon';
import { useLocation } from 'react-router-dom';

const MobileMenu = ({ isOpen }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(isOpen);
  const [activePage, setActivePage] = useState('');

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeMenu();
    }
  };

  useEffect(() => {
    setMenuIsOpen(isOpen);
  }, [isOpen]);

  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogOut = () => {
    closeMenu();
    dispatch(fetchUserLogout());
  };

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {menuIsOpen && <Overlay onClick={closeMenu}></Overlay>}
      <Menu
        className={menuIsOpen ? 'shown' : 'hidden'}
        onClick={handleBackdropClick}
      >
        <CloseBtn onClick={closeMenu}>
          <Svg>
            <Icon iconid={'x-white'} />
          </Svg>
        </CloseBtn>

        <NavMenu>
          <NavMenuLink
            to="/diary"
            onClick={closeMenu}
            style={{
              borderColor:
                activePage === '/diary'
                  ? 'var(--white-color)'
                  : 'rgba(239, 237, 232, 0.2)',
            }}
          >
            Diary
          </NavMenuLink>
          <NavMenuLink
            to="/products"
            onClick={closeMenu}
            style={{
              borderColor:
                activePage === '/products'
                  ? 'var(--white-color)'
                  : 'rgba(239, 237, 232, 0.2)',
            }}
          >
            Products
          </NavMenuLink>
          <NavMenuLink
            to="/exercises"
            onClick={closeMenu}
            style={{
              borderColor:
                activePage === '/exercises'
                  ? 'var(--white-color)'
                  : 'rgba(239, 237, 232, 0.2)',
            }}
          >
            Exercises
          </NavMenuLink>
        </NavMenu>
        <Logout type="button" onClick={handleLogOut}>
          <span>Logout</span>
          <LogoutSvg>
            <Icon iconid={'log-out-white'} />
          </LogoutSvg>
        </Logout>
      </Menu>
    </>
  );
};

export default MobileMenu;
