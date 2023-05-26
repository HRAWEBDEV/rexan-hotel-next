'use client';
import { FC, useRef, useState, useEffect } from 'react';
import CompImg, { ICompImgProps } from '../imageLazyLoader/CompImg';
import addClass from '@/app/utils/addClass';
interface ICompSliderProps {
 activeSliderShow?: boolean;
 sliderShowTimer?: number;
 initialSliderState?: number;
 slides: ICompImgProps[];
 showNavigators?: boolean;
 showIndicators?: boolean;
}

const CompImgSlider: FC<ICompSliderProps> = ({
 activeSliderShow = false,
 sliderShowTimer = 3000,
 initialSliderState = 0,
 slides = [],
 showNavigators = true,
 showIndicators = true,
}) => {
 const [sliderState, setSliderState] = useState(initialSliderState);
 const [userChangedSlide, setUserChangedSlide] = useState(false);
 const [sliderShowTimerId, setSliderShowTimerId] = useState<
  NodeJS.Timer | number
 >(0);
 const sliderContainerRef = useRef<HTMLDivElement>(null);
 const sliderRailRef = useRef<HTMLDivElement>(null);
 const resetRailTransition = () => {
  sliderRailRef.current?.style.setProperty('transition', '');
 };
 const continueSlides = (from: 'start' | 'end') => {
  sliderRailRef.current?.style.setProperty('transition', 'none');
  if (from == 'start') setSliderState(-1);
  else setSliderState(slides.length);
 };
 const changeSlide = (action: 'next' | 'prev') => {
  if (action == 'next') {
   sliderState == slides.length - 1 && continueSlides('start');
   setTimeout(() => {
    resetRailTransition();
    setSliderState((state) => (state += 1));
   });
  } else {
   sliderState == 0 && continueSlides('end');
   setTimeout(() => {
    resetRailTransition();
    setSliderState((state) => (state -= 1));
   });
  }
 };
 const onIndicatorClick = (index: number) => {
  setUserChangedSlide(true);
  clearTimeout(sliderShowTimerId);
  setSliderState(index);
 };
 const onNavigatorClick = (action: 'next' | 'prev') => {
  setUserChangedSlide(true);
  clearTimeout(sliderShowTimerId);
  changeSlide(action);
 };
 const setNewSliderState = (newState: number) => {
  sliderContainerRef.current?.style.setProperty(
   '--slider-state',
   newState + ''
  );
 };
 // * changing the slide
 useEffect(() => {
  setNewSliderState(sliderState);
 }, [sliderState]);
 useEffect(() => {
  if (activeSliderShow)
   setSliderShowTimerId(
    setTimeout(() => {
     changeSlide('next');
    }, sliderShowTimer)
   );
  return () => {
   clearTimeout(sliderShowTimerId);
  };
 }, [activeSliderShow]);
 useEffect(() => {
  if (!activeSliderShow || userChangedSlide) return;
  clearTimeout(sliderShowTimerId);
  setSliderShowTimerId(
   setTimeout(() => {
    changeSlide('next');
   }, sliderShowTimer)
  );
 }, [sliderState]);
 // *
 return (
  <>
   <div
    className='comp-image__slider-container'
    role='image slider'
    aria-label='image slider'
    ref={sliderContainerRef}
   >
    <div className='comp-image__slider-wrapper'>
     <div className='comp-image__slider-rail' ref={sliderRailRef}>
      {slides.map(({ id, ...slideProps }, index) => {
       return (
        <a
         role='slider slide'
         key={id || index}
         className={`comp-image__slide ${addClass(
          index != sliderState,
          'fade-out'
         )}`}
        >
         <CompImg id={id} {...slideProps}></CompImg>
        </a>
       );
      })}
     </div>
     {showNavigators && slides.length && (
      <>
       <button
        type='button'
        role='slider controll'
        className='comp-image__slider-ct start'
        onClick={() => onNavigatorClick('prev')}
       >
        <i className='opt-arrow-right'></i>
       </button>
       <button
        type='button'
        role='slider controll'
        className='comp-image__slider-ct end'
        onClick={() => onNavigatorClick('next')}
       >
        <i className='opt-arrow-left'></i>
       </button>
      </>
     )}
     {showIndicators && slides.length && (
      <div className='comp-image__slider-indicators'>
       {slides.map(({ id }, index) => {
        return (
         <button
          key={id || index}
          type='button'
          role='slider controll'
          className={`comp-image__slider-indicator ${addClass(
           index == sliderState,
           'is-selected'
          )}`}
          onClick={() => onIndicatorClick(index)}
         ></button>
        );
       })}
      </div>
     )}
    </div>
   </div>
  </>
 );
};

export default CompImgSlider;
