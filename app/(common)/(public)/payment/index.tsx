import './payment.module.scss';
import MasterBreadcrumb from '@/app/components/layout/MasterBreadcrumb';
import MultiLngText from '@/app/components/shared/translator/MultiLngText';
const Payment = () => {
 return (
  <>
   <MasterBreadcrumb routes={[]}></MasterBreadcrumb>
   <div className='ms-page-intro'>
    <h1 className='ms-page-intro__title'>
     <MultiLngText
      text='تایید و ثبت
     سفارش'
     />
    </h1>
   </div>
   <div className='prep__content'>
    <div className='payment-info'>
     <ul className='payment-info__list top'>
      <li></li>
      <li></li>
      <li>
       <span>تلفن همراه:‌ </span>
       <span>0912222222</span>
      </li>
      <li>
       <span>پست الکترونیکی:‌ </span>
       <span>hamidwise1@gmial.com</span>
      </li>
      <li>
       <span>واحد پول پرداختی:‌ </span>
       <span>ریال</span>
      </li>
     </ul>
     <ul className='payment-info__list'>
      <li>
       <span>آدرس:‌ </span>
       <span>میدان هفتم تیر</span>
      </li>
     </ul>
    </div>
    <form className='payment__submit'>
     <ul className='payment__portals-list'>
      <li className='payment__portals-item' tabIndex={0}>
       <i className='opt-checkmark'></i>
       <img className='payment__portals-img' src='' alt='portal logo' />
      </li>
     </ul>
     <div className='payment__submit-confirmation'>
      <span className='payment__submit-msg'>
       درگاه بانک جهت پرداخت انتخاب کنید
      </span>
     </div>
    </form>
   </div>
  </>
 );
};

export default Payment;
