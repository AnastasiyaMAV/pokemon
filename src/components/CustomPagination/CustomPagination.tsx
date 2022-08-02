import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const CustomPagination = ({
  currentPage,
  currentPageHandler,
  totalPages,
  perPage,
  perPageHandler,
}: {
  currentPage: number;
  currentPageHandler: (idx: number) => void;
  totalPages: number;
  perPage: number;
  perPageHandler: (idx: number) => void;
}) => {
  const handleClick: any = (idx: number) => {
    return () => currentPageHandler(idx);
  };

  //   const handleChange = (perPageHandler)

  return (
    <div style={{ display: 'flex' }}>
      {/* <select onChange={handleChange} /> */}

      {Array.from({ length: totalPages }).map((item, index) => {
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            style={{ width: '20px', color: currentPage === index ? 'red' : '' }}
            onClick={handleClick(index)}>
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};
