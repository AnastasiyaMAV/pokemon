import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogo } from '../../assets/images/Logo.svg';
import { MENU } from '../../utils/const/constVariable';
import MenuBurger from '../MenuBurger';

const Header = () => {
  const activeLink = {
    fontWeight: 'bold',
  };

  return (
    <>
      <MenuBurger />
      <div className={s.root}>
        <div className={s.wrap}>
          <NavLink to="/">
            <div className={s.pokemonLogo}>
              <PokemonLogo />
            </div>
          </NavLink>
          <div className={s.menuWrap}>
            {MENU.map(({ value, link, id }) => (
              <NavLink
                key={id}
                to={link}
                className={s.menuLink}
                style={({ isActive }) =>
                  isActive ? (activeLink as any) : undefined
                }>
                {value}
              </NavLink>
            ))}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
