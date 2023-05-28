import styles from './times.module.scss';
import MasterBreadcrumb from '@/app/components/layout/MasterBreadcrumb';
import MultiLngText from '@/app/components/shared/translator/MultiLngText';
import CompLink from '@/app/components/shared/button-link/CompLink';
import CompAsidePannel from '@/app/components/shared/aside/CompAsidePannel';
export default function page() {
 return (
  <>
   <MasterBreadcrumb routes={[]} />
   <div className='ms-page-intro'>
    <h1 className='ms-page-intro__title'>
     <MultiLngText text='انواع دوره های زمانی هتل رکسان' />
    </h1>
   </div>
   <div data-plans-content className={styles['plans__content']}>
    <CompAsidePannel></CompAsidePannel>
    <section id='plans__section' className={styles['plans__section']}>
     <article className={styles['plans__view']}>
      <div className={styles['plan__card-wrapper']}>
       <div className={styles['plan__card']}>
        <div className={styles['plan__card-header']}>
         <h3>
          <MultiLngText text='دوره دوازدهم' />
         </h3>
        </div>
        <div className={styles['plan__card-content']}>
         <div className={styles['plan__card-date']}>
          <div className={styles['plan__card-date-from']}>
           <div className={styles['plan__card-date-day']}>
            <span>4</span>
            <i className='opt-callender-day-frame'></i>
           </div>
           <div className={styles['plan__card-date-month']}>
            <i className='opt-lunar-month-1'></i>
            <span></span>
           </div>
          </div>
          <span className={styles['plan__card-date-del']}></span>
          <div className={styles['plan__card-date-to']}>
           <div className={styles['plan__card-date-day']}>
            <span>2</span>
            <i className='opt-callender-day-frame'></i>
           </div>
           <div className={styles['plan__card-date-month']}>
            <i className='opt-lunar-month-1'></i>
            <span></span>
           </div>
          </div>
         </div>
         <div className={styles['plan__card-desc']}>
          <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
           quam vero autem enim nisi, hic dolorem error, fuga voluptatibus
           numquam nam aperiam blanditiis in amet. Nostrum fuga impedit
           temporibus eos?
          </p>
         </div>
         <div className={styles['plan__card-more']}>
          <CompLink vairiants='gold' href={'#'}>
           <MultiLngText text='لیست اتاق ها' />
          </CompLink>
         </div>
        </div>
       </div>
      </div>
     </article>
    </section>
   </div>
  </>
 );
}
