import { FC, useRef } from 'react';
import CompImg, { ICompImgProps } from '../imageLazyLoader/CompImg';
interface ICompSliderProps {
 slides: ICompImgProps[];
 showNavigators?: boolean;
 showIndicators?: boolean;
}

const CompImgSlider: FC<ICompSliderProps> = ({
 slides,
 showNavigators = true,
 showIndicators = true,
}) => {
 const sliderContainerRef = useRef<null>(null);
 const onNavigatorClick = (action: 'next' | 'prev') => {};
 const setNewSliderState = (newState: number) => {};
 return (
  <>
   <div
    className='comp-image__slider-container'
    role='image slider'
    aria-label='image slider'
    ref={sliderContainerRef}
   >
    <div className='comp-image__slider-wrapper'>
     <div className='comp-image__slider-rail'>
      {slides.map(({ id, ...slideProps }, index) => {
       return (
        <a role='slider slide' key={id || index} className='comp-image__slide'>
         <CompImg id={id} {...slideProps}></CompImg>
        </a>
       );
      })}
     </div>
     {showNavigators && (
      <>
       <button
        type='button'
        role='slider controll'
        className='comp-image__slider-ct start'
        onClick={() => onNavigatorClick('next')}
       >
        <i className='opt-arrow-right'></i>
       </button>
       <button
        type='button'
        role='slider controll'
        className='comp-image__slider-ct end'
        onClick={() => onNavigatorClick('prev')}
       >
        <i className='opt-arrow-left'></i>
       </button>
      </>
     )}
     {showIndicators && (
      <div className='comp-image__slider-indicators'>
       {slides.map((slide, index) => {
        return (
         <button
          type='button'
          role='slider controll'
          className='comp-image__slider-indicator'
          onClick={() => setNewSliderState(index)}
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
