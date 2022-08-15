import React, { useEffect, useState } from 'react';
import s from './CustomPagination.module.scss';
import Select from '../UI/Select';
import Button from '../UI/Button';

interface ICustomPaginationProps {
  updateDataLimit: (value: number) => void;
  page: number;
  updateDataPage: (value: number) => void;
}

export const CustomPagination: React.FC<ICustomPaginationProps> = ({
  updateDataLimit,
  page,
  updateDataPage,
}) => {
  const optionShowArr = [10, 20, 30, 40, 50];
  const endPageArr = [115, 57, 38, 28, 23];
  const [valueSelect, setValueSelect] = useState<number>();
  const [endPage, setEndPage] = useState<number>(115); // 115 - при лимите 10
  const [isDisabledPrevious, setIsDisabledPrevious] = useState<boolean>(true);
  const [isDisabledNext, setIsDisabledNext] = useState<boolean>(false);

  useEffect(() => {
    if (page === 1) {
      setIsDisabledPrevious(true);
    } else {
      setIsDisabledPrevious(false);
    }
  }, [page]);

  useEffect(() => {
    if (page === endPage) {
      setIsDisabledNext(true);
    } else {
      setIsDisabledNext(false);
    }
  }, [endPage, page]);

  const handlerChange = (value: number) => {
    setValueSelect(value);
    updateDataLimit(value);

    setEndPage(Math.trunc(1154 / value)); // 1154 - всего покемонов

    updateDataPage(1); // при изменении лимита, перейти на первую страницу
  };

  const handlerNextClick = () => {
    updateDataPage(page + 1);
  };

  const handlerPreviousClick = () => {
    updateDataPage(page - 1);
  };

  const handlerLastClick = () => {
    endPageArr.forEach((element) => {
      if (endPage === element) {
        updateDataPage(element);
      }
    });
  };

  const handlerFirsClick = () => {
    updateDataPage(1);
  };

  return (
    <div className={s.root}>
      <div className={s.textRoot}>
        <span className={s.span}>Show</span>{' '}
        <Select
          options={optionShowArr}
          defaultValue={10}
          value={valueSelect}
          onChangeValueSelect={handlerChange}
        />
      </div>
      <div className={s.btnsGr}>
        <Button onClick={handlerFirsClick} size="mini" color="yellow">
          First
        </Button>
        <Button
          onClick={handlerPreviousClick}
          size="mini"
          isDisabled={isDisabledPrevious}>
          &#8592;
        </Button>
        <Button
          onClick={handlerNextClick}
          size="mini"
          isDisabled={isDisabledNext}>
          &#8594;
        </Button>
        <Button onClick={handlerLastClick} size="mini" color="yellow">
          Last
        </Button>
      </div>
      <div className={s.textRoot}>
        <span className={s.span}>
          Page{' '}
          <strong>
            {page} of {endPage}
          </strong>{' '}
        </span>
      </div>
    </div>
  );
};

export default CustomPagination;
