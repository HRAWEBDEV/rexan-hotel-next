'use client';
import React from 'react';
import styles from './room-detail.module.scss';
import MasterHeader from '../../components/layout/MasterHeader';
import MasterFooter from '../../components/layout/MasterFooter';
import CompLink from '@/app/components/shared/button-link/CompLink';
import MultiLngText from '@/app/components/shared/translator/MultiLngText';

const RoomsDetail = () => {
 return (
  <>
   <MasterHeader />
   <div className='master__conatiner'>
    <div className='master__content'>
     <main className={`master__main`}>
      <div className='ms-page-intro'>
       <h1 className='ms-page-intro__title'>
        جزئیات اتاق <span>۱۴۶</span> هتل رکسان
       </h1>
      </div>
      <div className={styles['room-detail__content']}>
       <section className={styles['room-detail__slider']}>
        <div className={styles['room-detail__slides']}></div>
        <div className={styles['room-detail__info']}>
         <ul>
          <li className='util-mar-b-small'>
           <span>شماره اتاق: </span>
           <span className='util-txt-red'>۱۴۶</span>
          </li>
          <li className='util-mar-b-small'>
           <span>نوع اتاق: </span>
           <span className='util-txt-red'>دو تخته دبل</span>
          </li>
          <li className='util-mar-b-small'>
           <span>متراژ: </span>
           <span className='util-txt-red'>۳۶ مترمربع</span>
          </li>
          <li>
           <span>نوع و تعداد تخت: </span>
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
           <span className='util-txt-red'>حرم مطهر امام حسین (ع)</span>
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
          پلن طبقه <span>۱۱</span> اتاق <span>۱۴۶</span> هتل رکسان
          <span className='header-wing'></span>
         </h2>
        </div>
        <div className={styles['room-detail__plan']}></div>
       </section>
       <section className={styles['room-detail__facilities']}>
        <h2 className={styles['room-detail__facilities-title']}>
         <span className='header-wing start'></span>
         امکانات اتاق
         <span className='header-wing'></span>
        </h2>
        <div className={styles['room-detail__facilities-container']}>
         <article className={styles['room-detail__facilities-view']}>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i
             className={`${styles['facilities__card-icon']} opt-luxury-room`}
            ></i>
           </div>
           <span className={styles['facilities__card-des']}>
            اتاق های لاکچری
           </span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i
             className={`${styles['facilities__card-icon']} opt-airport-pickup`}
            ></i>
           </div>
           <span className={styles['facilities__card-des']}>
            ترانسفر فرودگاه
           </span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i className={`${styles['facilities__card-icon']} opt-pool`}></i>
           </div>
           <span className={styles['facilities__card-des']}>استخر</span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i className={`${styles['facilities__card-icon']} opt-wifi`}></i>
           </div>
           <span className={styles['facilities__card-des']}>
            اینترنت رایگان
           </span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i
             className={`${styles['facilities__card-icon']} opt-fastfood`}
            ></i>
           </div>
           <span className={styles['facilities__card-des']}>رستوران</span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i
             className={`${styles['facilities__card-icon']} opt-cofee-shop`}
            ></i>
           </div>
           <span className={styles['facilities__card-des']}>کافی شاپ</span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i
             className={`${styles['facilities__card-icon']} opt-city-guide`}
            ></i>
           </div>
           <span className={styles['facilities__card-des']}>
            راهنمای تور شهر
           </span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i
             className={`${styles['facilities__card-icon']} opt-luxury-room`}
            ></i>
           </div>
           <span className={styles['facilities__card-des']}>
            اتاق های لاکچری
           </span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i
             className={`${styles['facilities__card-icon']} opt-airport-pickup`}
            ></i>
           </div>
           <span className={styles['facilities__card-des']}>
            ترانسفر فرودگاه
           </span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i className={`${styles['facilities__card-icon']} opt-pool`}></i>
           </div>
           <span className={styles['facilities__card-des']}>استخر</span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i className={`${styles['facilities__card-icon']} opt-wifi`}></i>
           </div>
           <span className={styles['facilities__card-des']}>
            اینترنت رایگان
           </span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i
             className={`${styles['facilities__card-icon']} opt-fastfood`}
            ></i>
           </div>
           <span className={styles['facilities__card-des']}>رستوران</span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i
             className={`${styles['facilities__card-icon']} opt-cofee-shop`}
            ></i>
           </div>
           <span className={styles['facilities__card-des']}>کافی شاپ</span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i
             className={`${styles['facilities__card-icon']} opt-city-guide`}
            ></i>
           </div>
           <span className={styles['facilities__card-des']}>
            راهنمای تور شهر
           </span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i
             className={`${styles['facilities__card-icon']} opt-airport-pickup`}
            ></i>
           </div>
           <span className={styles['facilities__card-des']}>
            ترانسفر فرودگاه
           </span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i className={`${styles['facilities__card-icon']} opt-pool`}></i>
           </div>
           <span className={styles['facilities__card-des']}>استخر</span>
          </a>
          <a href='' className={styles['facilities__card']}>
           <div className={styles['facilities__card-icon-wrapper']}>
            <i
             className={`${styles['facilities__card-icon']} opt-cofee-shop`}
            ></i>
           </div>
           <span className={styles['facilities__card-des']}>کافی شاپ</span>
          </a>
         </article>
        </div>
        <div className={styles['more-facilities less']}>
         {/* <comp-link
         text="toggleBtnText"
         logo="true"
         class="more-facilities__btn"
         class-name="'gold'"
         on-click="toggleBtnClicked"
        ></comp-link> */}
         {/* <CompLink href={'#'}></CompLink> */}
        </div>
       </section>
       <section className={styles['room-detail__table']}>
        <div className={`${styles['room-detail__table-title']} util-mar-b`}>
         <h2 className={`${styles['room-detail__table-title']} util-txt-red`}>
          <span className='header-wing start'></span>
          دوره های قابل خرید اتاق <span>۱۴۶</span> هتل رکسان
          <span className='header-wing'></span>
         </h2>
        </div>
        <div className='comp-sp-tb__container util-pad'>
         <div className='comp-sp-tb__res'>
          <table className='comp-sp-tb'>
           <thead>
            <tr>
             <th>
              <div className='inner-cell'>شماره دوره</div>
             </th>
             <th>
              <div className='inner-cell'>نوع دوره</div>
             </th>
             <th>
              <div className='inner-cell'>بازه زمانی</div>
             </th>
             <th>
              <div className='inner-cell'>مدت اقامت</div>
             </th>
             <th>
              <div className='inner-cell'>قیمت (تومان)</div>
             </th>
             <th>
              <div className='inner-cell'>وضعیت</div>
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
     </main>
    </div>
   </div>
   <MasterFooter />
  </>
 );
};

export default RoomsDetail;
