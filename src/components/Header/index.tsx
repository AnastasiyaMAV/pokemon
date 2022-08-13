import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogo } from '../../assets/images/Logo.svg';
import { LinkEnum } from '../../utils/const/constVariable';
import MenuBurger from '../MenuBurger';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: LinkEnum.HOME,
  },
  {
    id: 2,
    value: 'Pokédex',
    link: LinkEnum.POKEDEX,
  },
  {
    id: 3,
    value: 'Pokemon Search',
    link: LinkEnum.SEARCH,
  },
  {
    id: 4,
    value: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
  },
  {
    id: 5,
    value: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
  },
];

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
