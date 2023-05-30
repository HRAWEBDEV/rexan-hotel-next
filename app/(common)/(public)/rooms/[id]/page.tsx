'use client';
import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './room-detail.module.scss';
import MultiLngText from '@/app/components/shared/translator/MultiLngText';
import CompLink from '@/app/components/shared/button-link/CompLink';
import SpecialTable from '@/app/components/shared/table/SpecialTable';

const facilitiesVariants: Variants = {
 isClosed: {
  height: '40em',
  transition: {
   ease: 'easeIn',
   duration: 0.5,
  },
 },
 isOpen: {
  height: 'auto',
  transition: {
   ease: 'easeIn',
   duration: 0.5,
  },
 },
};

const RoomsDetail = ({ params }: any) => {
 const [toggle, setToggle] = useState(false);
 const toggleBtnHandler = function () {
  setToggle((current) => !current);
 };

 return (
  <>
   <div className='ms-page-intro'>
    <h1 className='ms-page-intro__title'>
     <MultiLngText text='جزئیات اتاق ' />
     <span>۱۴۶</span>
     <MultiLngText text=' هتل رکسان' />
    </h1>
   </div>
   <div className={styles['room-detail__content']}>
    <section className={styles['room-detail__slider']}>
     <div className={styles['room-detail__slides']}></div>
     <div className={styles['room-detail__info']}>
      <ul>
       <li className='util-mar-b-small'>
        <span>
         <MultiLngText text='شماره اتاق : ' />
        </span>
        <span className='util-txt-red'>۱۴۶</span>
       </li>
       <li className='util-mar-b-small'>
        <span>
         <MultiLngText text='نوع اتاق : ' />
        </span>
        <span className='util-txt-red'>دو تخته دبل</span>
       </li>
       <li className='util-mar-b-small'>
        <span>
         <MultiLngText text='متراژ : ' />
        </span>
        <span className='util-txt-red'>۳۶ مترمربع</span>
       </li>
       <li>
        <span>
         <MultiLngText text='نوع و تعداد تخت : ' />
        </span>
        <span className='util-txt-red'>۱ عدد ۲ نفره / ۲ عدد ۱ نفره</span>
       </li>
      </ul>
      <ul>
       <li className='util-mar-b-small'>
        <span>
         <MultiLngText text='طبقه : ' />
        </span>
        <span className='util-txt-red'>۱۱</span>
       </li>
       <li className='util-mar-b-small'>
        <span>
         <MultiLngText text='بلوک : ' />
        </span>
        <span className='util-txt-red'>A</span>
       </li>
       <li className='util-mar-b-small'>
        <span>
         <MultiLngText text='حداقل ظرفیت : ' />
        </span>
        <span className='util-txt-red'>۲ نفر</span>
       </li>
       <li>
        <span>
         <MultiLngText text='حداکثر ظرفیت : ' />
        </span>
        <span className='util-txt-red'>۴ نفر</span>
       </li>
      </ul>
      <ul>
       <li className='util-mar-b-small'>
        <span>
         <MultiLngText text='چشم انداز : ' />
        </span>
        <span className='util-txt-red'>
         <MultiLngText text='حرم مطهر امام حسین (ع)' />
        </span>
       </li>
       <li>
        <span>
         <MultiLngText text='تراس : ' />
        </span>
        <span className='util-txt-red'>دارد</span>
       </li>
      </ul>
     </div>
    </section>
    <section className={styles['room-detail__plan-container']}>
     <div className={styles['room-detail__plan-title']}>
      <h2 className='util-txt-red'>
       <span className='header-wing start'></span>
       <MultiLngText text=' پلن طبقه ' />
       <span>۱۱</span>
       <MultiLngText text=' اتاق ' />
       <span>۱۴۶</span>
       <MultiLngText text=' هتل رکسان ' />
       <span className='header-wing'></span>
      </h2>
     </div>
     <div className={styles['room-detail__plan']}></div>
    </section>
    <section
     className={styles['room-detail__facilities']}
     style={{ paddingBlockEnd: `${toggle ? 'var(--gap-2x)' : '0'}` }}
    >
     <h2 className={styles['room-detail__facilities-title']}>
      <span className='header-wing start'></span>
      <MultiLngText text='امکانات اتاق' />
      <span className='header-wing'></span>
     </h2>
     <div className={styles['room-detail__facilities-container']}>
      <motion.article
       className={styles['room-detail__facilities-view']}
       variants={facilitiesVariants}
       initial='isClosed'
       animate={toggle ? 'isOpen' : 'isClosed'}
       id='room-detail__facilities-view'
      >
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i
          className={`${styles['facilities__card-icon']} opt-luxury-room`}
         ></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='اتاق های لاکچری' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i
          className={`${styles['facilities__card-icon']} opt-airport-pickup`}
         ></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='ترانسفر فرودگاه' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-pool`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='استخر' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-wifi`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='اینترنت رایگان' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-fastfood`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='رستوران' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-cofee-shop`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='کافی شاپ' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-city-guide`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='راهنمای تور شهر' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i
          className={`${styles['facilities__card-icon']} opt-luxury-room`}
         ></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='اتاق های لاکچری' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i
          className={`${styles['facilities__card-icon']} opt-airport-pickup`}
         ></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='ترانسفر فرودگاه' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-pool`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='استخر' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i
          className={`${styles['facilities__card-icon']} opt-luxury-room`}
         ></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='اتاق های لاکچری' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i
          className={`${styles['facilities__card-icon']} opt-airport-pickup`}
         ></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='ترانسفر فرودگاه' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-pool`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='استخر' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-wifi`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='اینترنت رایگان' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-fastfood`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='رستوران' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-cofee-shop`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='کافی شاپ' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-city-guide`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='راهنمای تور شهر' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-fastfood`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='رستوران' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-cofee-shop`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='کافی شاپ' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-city-guide`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='راهنمای تور شهر' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-fastfood`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='رستوران' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-cofee-shop`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='کافی شاپ' />
        </span>
       </a>
       <a href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={`${styles['facilities__card-icon']} opt-city-guide`}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='راهنمای تور شهر' />
        </span>
       </a>
      </motion.article>
      <div
       className={`${styles['more-facilities']} ${
        styles[toggle ? 'more' : 'less']
       }`}
      >
       <CompLink
        withLogo={true}
        //  href={`/rooms/${params.id}`}
        href={`/rooms/${params.id}/#room-detail__facilities-view`}
        className={styles['more-facilities__btn']}
        onClick={toggleBtnHandler}
       >
        <MultiLngText text={toggle ? 'موارد کمتر' : 'موارد بیشتر'} />
       </CompLink>
      </div>
     </div>
    </section>
    <section className={styles['room-detail__table']}>
     <div className={`${styles['room-detail__table-title']} util-mar-b`}>
      <h2 className={`${styles['room-detail__table-title']} util-txt-red`}>
       <span className='header-wing start'></span>
       <MultiLngText text=' دوره های قابل خرید اتاق ' />
       <span>۱۴۶</span>
       <MultiLngText text=' هتل رکسان ' />
       <span className='header-wing'></span>
      </h2>
     </div>
     <SpecialTable />
     <div className='comp-sp-tb__container util-pad'>
      <div className='comp-sp-tb__res'>
       <table className='comp-sp-tb'>
        <thead>
         <tr>
          <th>
           <div className='inner-cell'>
            <MultiLngText text='شماره دوره' />
           </div>
          </th>
          <th>
           <div className='inner-cell'>
            <MultiLngText text='نوع دوره' />
           </div>
          </th>
          <th>
           <div className='inner-cell'>
            <MultiLngText text='بازه زمانی' />
           </div>
          </th>
          <th>
           <div className='inner-cell'>
            <MultiLngText text='مدت اقامت' />
           </div>
          </th>
          <th>
           <div className='inner-cell'>
            <MultiLngText text='قیمت (تومان)' />
           </div>
          </th>
          <th>
           <div className='inner-cell'>
            <MultiLngText text='وضعیت' />
           </div>
          </th>
         </tr>
        </thead>
        <tbody>
         <tr>
          <td>
           <div className='inner-cell'></div>
          </td>
          <td>
           <div className='inner-cell'></div>
          </td>
          <td>
           <div className='inner-cell' style={{ textAlign: 'right' }}></div>
          </td>
          <td>
           <div className='inner-cell'></div>
          </td>
          <td>
           <div className='inner-cell'></div>
          </td>
          <td>
           <div className='inner-cell util-txt-red'></div>
           <div className='inner-cell util-txt-gold'>
            <button>
             <i className='opt-checkmark util-fn-1-5'></i>
            </button>
           </div>
           {/* <comp-button
              class="room__times-reserve-btn"
              class-name="'gold'"
              text="TmpRoomTime.StatusName"
              ng-if="TmpRoomTime.StatusID==1"
              on-click="BuyTimeClicked"
              overload="TmpRoom"
              overload2="TmpRoomTime"
             >
             </comp-button> */}
          </td>
         </tr>
        </tbody>
       </table>
      </div>
     </div>
    </section>
   </div>
  </>
 );
};

export default RoomsDetail;
