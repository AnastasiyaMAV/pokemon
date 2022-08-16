import React from 'react';
import s from './Select.module.scss';

interface ISelect {
  options: Array<number>;
  defaultValue: number;
  value: number | undefined;
  onChangeValueSelect: (value: number) => void;
}

const Select: React.FC<ISelect> = ({
  options,
  defaultValue,
  value,
  onChangeValueSelect,
}) => {
  const handlerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeValueSelect(Number(event.target.value));
  };

  return (
    <select
      onChange={handlerChange}
      className={s.select}
      defaultValue=""
      value={value && value}>
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
