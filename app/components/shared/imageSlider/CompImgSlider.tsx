import CompImg from '../imageLazyLoader/CompImg';

const CompImgSlider = () => {
 return (
  <>
   <div
    className='comp-image__slider-container'
    role='image slider'
    aria-label='image slider'
   >
    <div className='comp-image__slider-wrapper'>
     <div className='comp-image__slider-rail'>
      <a role='slider slide' className='comp-image__slide'>
       {/* <CompImg></CompImg> */}
      </a>
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
