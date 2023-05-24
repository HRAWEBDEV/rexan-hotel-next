import { FC } from 'react';
import CompImg, { ICompImgProps } from '../imageLazyLoader/CompImg';
import CompLink from '../button-link/CompLink';
interface ICompSliderProps {
 slides: ICompImgProps[];
}

const CompImgSlider: FC<ICompSliderProps> = ({ slides }) => {
 return (
  <>
   <div
    className='comp-image__slider-container'
    role='image slider'
    aria-label='image slider'
   >
    <div className='comp-image__slider-wrapper'>
     <div className='comp-image__slider-rail'>
      {slides.map(({ id, ...slideProps }, index) => {
       return (
        <a role='slider slide' className='comp-image__slide'>
         <CompImg key={id || index} id={id} {...slideProps}></CompImg>
        </a>
       );
      })}
     </div>
     <button
      type='button'
      role='slider controll'
      className='comp-image__slider-ct start'
     >
      <i className='opt-arrow-right'></i>
     </button>
     <button
      type='button'
      role='slider controll'
      className='comp-image__slider-ct end'
     >
      <i className='opt-arrow-left'></i>
     </button>
     <div className='comp-image__slider-indicators'>
      <button
       type='button'
       role='slider controll'
       className='comp-image__slider-indicator'
      ></button>
     </div>
    </div>
   </div>
  </>
 );
};

export default CompImgSlider;
