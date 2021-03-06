import React, { FC, useEffect, useState } from 'react';

export const ScrollToTop: FC = () => {
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);
  const [scrollInit, setScrollInit] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollListener = () => {
      if (scrollInit === false) {
        window.addEventListener('scroll', () => {
          if (window.pageYOffset > 300) {
            setShowScrollToTop(true);
          } else {
            setShowScrollToTop(false);
          }
        });
        setScrollInit(true);
      }
    };

    handleScrollListener();
  }, [scrollInit]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className='group px-2 py-1 leading-none bg-white hover:bg-white transition-all shadow-lg duration-300 fixed bottom-2 right-2 text-black'>
          <span className='align-middle text-2xl'>&#9650;</span>
          <span className='align-middle sr-only group-hover:not-sr-only text-lg'>
            {' '}
            To the Top with Ye
          </span>
        </button>
      )}
    </>
  );
};
