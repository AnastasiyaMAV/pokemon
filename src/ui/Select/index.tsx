import React from 'react';
import s from './Select.module.scss';

interface ISelect {
  options: Array<string>;
  defaultValue: string;
}

const Select: React.FC<ISelect> = ({ options, defaultValue }) => {
  return (
    <select className={s.select} defaultValue="">
      <option value="" disabled hidden>
        {defaultValue}
      </option>
      {options.map((item, index) => {
        return (
          <option key={item + String(index)} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
