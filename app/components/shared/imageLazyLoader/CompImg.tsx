import { FC, useState } from 'react';
import Image, { ImageProps } from 'next/image';
import addClass from '../../../utils/addClass';
// *
interface ICompImg extends ImageProps {}
// *
const CompImg: FC<ICompImg> = ({
 className,
 onLoad,
 onError,
 draggable = false,
 ...imgPorps
}) => {
 const [loaderState, setLoaderState] = useState(true);
 // *
 const onImageLoaded = () => {
  setLoaderState(false);
 };
 const onImageError = () => {
  setLoaderState(false);
 };
 // *
 return (
  <>
   <div className='comp-image__wrapper'>
    <Image
     draggable={draggable}
     onLoad={(e) => {
      onImageLoaded();
      onLoad && onLoad(e);
     }}
     onError={(e) => {
      onImageError();
      onError && onError(e);
     }}
     className={`comp-image${addClass(className, className)}`}
     {...imgPorps}
    />
    {loaderState && (
     <div className='comp-image__loading-wrapper'>
      <svg
       className='comp-image__loading'
       xmlns='http://www.w3.org/2000/svg'
       xmlnsXlink='http://www.w3.org/1999/xlink'
       style={{
        margin: 'auto',
        background: 'none',
        display: 'block',
        shapeRendering: 'auto',
       }}
       viewBox='0 0 100 100'
       preserveAspectRatio='xMidYMid'
      >
       <path
        className='loading-circle'
        d='M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50'
        stroke='none'
       >
        <animateTransform
         attributeName='transform'
         type='rotate'
         dur='1s'
         repeatCount='indefinite'
         keyTimes='0;1'
         values='0 50 51;360 50 51'
        ></animateTransform>
       </path>
      </svg>
     </div>
    )}
   </div>
  </>
 );
};

export default CompImg;
