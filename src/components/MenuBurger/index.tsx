/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import s from './MenuBurger.module.scss';

import { LinkEnum } from '../../utils/const/constVariable';

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

const MenuBurger = () => {
  const [menuBox, setMenuBox] = useState(false);
  const activeLink = {
    fontWeight: 'bold',
  };
  const handleMenuToggle = () => {
    if (menuBox) {
      setMenuBox(false);
    } else {
      setMenuBox(true);
    }
  };

  return (
    <div className={s.hamburger}>
      <input id={s.menuToggle} type="checkbox" checked={menuBox} />
      <label
        className={s.menuBtn}
        htmlFor="menuToggle"
        onClick={handleMenuToggle}
        onKeyPress={handleMenuToggle}>
        <span />
      </label>

      <ul className={menuBox ? cn(s.menuBox, s.menuBoxActive) : s.menuBox}>
        {MENU.map(({ value, link, id }) => (
          <div key={id} className={s.containerLink}>
            <NavLink
              to={link}
              className={s.menuLink}
              style={({ isActive }) =>
                isActive ? (activeLink as any) : undefined
              }>
              {value}
            </NavLink>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MenuBurger;
