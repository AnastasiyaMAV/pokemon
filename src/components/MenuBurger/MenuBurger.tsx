/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import s from './MenuBurger.module.scss';

import { MENU } from '../../utils/const/constVariable';

export const MenuBurger = () => {
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
      <input id={s.menuToggle} type="checkbox" checked={menuBox} readOnly />
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
