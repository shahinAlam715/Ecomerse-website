import React, { useContext, useRef, useState, useEffect, useCallback } from 'react';
import { Apidata } from './ContextApi';
import Container from './Container';
import { Link } from 'react-router-dom';

const WINDOW = 4;

function getWindowedDots(cur, total) {
  if (total <= WINDOW) {
    return Array.from({ length: total }, (_, i) => ({
      index: i, type: i === cur ? 'active' : 'normal'
    }));
  }
  let winStart = Math.max(0, Math.min(cur - 1, total - WINDOW));
  const winEnd = winStart + WINDOW - 1;
  const dots = [];
  if (winStart > 0) dots.push({ index: winStart - 1, type: 'small' });
  for (let i = winStart; i <= winEnd; i++) dots.push({ index: i, type: i === cur ? 'active' : 'normal' });
  if (winEnd < total - 1) dots.push({ index: winEnd + 1, type: 'small' });
  return dots;
}

const Top = () => {
  const data = useContext(Apidata);
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const dragRef = useRef({ isDragging: false, startX: 0, startTranslate: 0 });

  const getPerPage = useCallback(() => {
    const w = wrapperRef.current?.offsetWidth || 0;
    if (w < 767) return 1
     if (w < 1024) return 2
    if (w < 1280) return 4
    return 4
  }, []);

  const getCardWidth = useCallback(() => {
    const perPage = getPerPage();
    const gap = 20;
    return (wrapperRef.current?.offsetWidth - gap * (perPage - 1)) / perPage + gap;
  }, [getPerPage]);

  const goTo = useCallback((page) => {
    const perPage = getPerPage();
    const pages = Math.ceil(data.length / perPage);
    const target = Math.max(0, Math.min(page, pages - 1));
    setCurrent(target);
    setTotalPages(pages);
    const offset = target * getCardWidth() * perPage;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offset}px)`;
    }
  }, [data.length, getPerPage, getCardWidth]);

  useEffect(() => {
    const update = () => {
      const perPage = getPerPage();
      setTotalPages(Math.ceil(data.length / perPage));
      setCurrent(0);
      if (trackRef.current) trackRef.current.style.transform = 'translateX(0)';
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [data.length, getPerPage]);

  const onMouseDown = (e) => {
    const m = trackRef.current.style.transform.match(/-?([\d.]+)px/);
    dragRef.current = {
      isDragging: true,
      startX: e.clientX,
      startTranslate: m ? -parseFloat(m[1]) : 0,
    };
    trackRef.current.classList.add('dragging');
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!dragRef.current.isDragging) return;
      const dx = e.clientX - dragRef.current.startX;
      trackRef.current.style.transform = `translateX(${Math.min(0, dragRef.current.startTranslate + dx)}px)`;
    };
    const onMouseUp = (e) => {
      if (!dragRef.current.isDragging) return;
      dragRef.current.isDragging = false;
      trackRef.current?.classList.remove('dragging');
      const dx = e.clientX - dragRef.current.startX;
      goTo(dx < 0 ? current + 1 : current - 1);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [current, goTo]);

  const onTouchStart = (e) => {
    const m = trackRef.current.style.transform.match(/-?([\d.]+)px/);
    dragRef.current = {
      isDragging: true,
      startX: e.touches[0].clientX,
      startTranslate: m ? -parseFloat(m[1]) : 0,
    };
  };
  const onTouchMove = (e) => {
    const dx = e.touches[0].clientX - dragRef.current.startX;
    trackRef.current.style.transform = `translateX(${Math.min(0, dragRef.current.startTranslate + dx)}px)`;
  };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - dragRef.current.startX;
    goTo(Math.abs(dx) > 50 ? (dx < 0 ? current + 1 : current - 1) : current);
  };

  const getFlexBasis = () => {
    return 'calc(25% - 15px)'
  }

  return (
    <section>
      <Container className="mx-2">
        <h2 className="2xs:text-[20px] xs:text-[28px] sm:text-[36px] lg:text-[40px] xl:text-[42px] font-bold font-josefin text-[#00009D] text-center my-[64px]">
          Top Categories
        </h2>

        <div ref={wrapperRef} className="overflow-hidden w-full">
          <div
            ref={trackRef}
            className="flex gap-5 transition-transform duration-[450ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-grab active:cursor-grabbing select-none"
            style={{ willChange: 'transform' }}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {data.map((item, i) => {
              const perPage = getPerPage()
              const basis = perPage === 1
                ? 'calc(100%)'
                : perPage === 2
                ? 'calc(50% - 10px)'
                : 'calc(25% - 15px)'

              return (
                <div
                  key={i}
                  className="flex-shrink-0 flex flex-col items-center gap-3"
                  style={{ flexBasis: basis }}
                >
                  <div className="relative w-full aspect-square max-w-[260px] mx-auto group">
                     
                    <div className="h-full w-full rounded-full bg-[#F6F7FB] shadow-[0_0_15px_rgba(0,0,0,0.15)] flex justify-center items-center overflow-hidden transition-colors duration-300 group-hover:bg-[#7E33E0]">
                      <img src={item.thumbnail} alt={item.title} className="w-[70%] h-[70%] object-contain pointer-events-none" />
                    </div>
                     
                    <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button className="py-2 px-4 bg-[#08D15F] hover:bg-[#7E33E0] text-white text-[14px] rounded-[5px] font-josefin whitespace-nowrap transition-colors">
                        View Shop
                      </button>
                    </div>
                  </div>
                  <h3 className="text-center text-[18px] font-josefin font-medium">{item.title}</h3>
                  <h4 className="text-center text-[16px] font-Lato font-medium text-gray-600">{item.price}</h4>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-30 hover:bg-gray-100 transition-colors"
          >
            ‹
          </button>

          <div className="flex items-center gap-[5px]">
            {getWindowedDots(current, totalPages).map((dot) => (
              <button
                key={dot.index}
                onClick={() => goTo(dot.index)}
                className={`rounded-full border-none cursor-pointer flex-shrink-0 transition-all duration-200 ${
                  dot.type === 'active'
                    ? 'w-[10px] h-[10px] bg-[#7E33E0] scale-[1.2]'
                    : dot.type === 'small'
                    ? 'w-[5px] h-[5px] bg-gray-200'
                    : 'w-[8px] h-[8px] bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(current + 1)}
            disabled={current >= totalPages - 1}
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-30 hover:bg-gray-100 transition-colors"
          >
            ›
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Top;