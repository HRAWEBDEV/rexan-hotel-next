import { FC } from 'react';
import CompLink from '@/app/components/shared/button-link/CompLink';
import MultiLngText from '@/app/components/shared/translator/MultiLngText';
import { motion } from 'framer-motion';
// *
interface IMasterCard {}

const MasterCard: FC<IMasterCard> = () => {
 // *
 return (
  <>
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='master-card__container'
   >
    <div className='master-card__wrapper'>
     <div className='master-card__empty'>
      <i className='opt-shopping-cart'></i>
      <span className='util-txt-medium'>
       <MultiLngText text='دوره ای انتخاب نشده است' />
      </span>
     </div>
     <div className='master-card__bill-container'>
      <ul className='master-card__bill-list'>
       <li className='master-card__bill'>
        <div className='master-card__bill-row'>
         <div>
          <span>
           <MultiLngText text='شماره اتاق' />
          </span>
          <span className='util-txt-medium'></span>
         </div>
         <div>
          <span className='util-txt-red util-txt-medium'>
           <MultiLngText text='ریال' />
          </span>
         </div>
        </div>
        <div className='master-card__bill-row'>
         <div>
          <span>
           <MultiLngText text='نوع اتاق' />
          </span>
          <span className='util-txt-medium'></span>
         </div>
         <div>
          <button className='util-txt-red'>
           <i className='opt-trash-can util-fn-1-5'></i>
          </button>
         </div>
        </div>
        <div className='master-card__bill-row'>
         <div>
          <span>
           <MultiLngText text='دوره' />
          </span>
          <span className='util-txt-medium'></span>
         </div>
        </div>
       </li>
      </ul>
      <div className='master-card__total util-txt-medium'>
       <span>
        <MultiLngText text='جمع کل' />
       </span>
       <span>
        <MultiLngText text='ریال' />
       </span>
      </div>
     </div>
     <CompLink className='room__times-reserve-btn' vairiants='gold' href={'#'}>
      <MultiLngText text='خرید' />
     </CompLink>
    </div>
   </motion.div>
  </>
 );
};
export default MasterCard;
