import styles from './sign-up.module.scss';
import CompLink from '@/app/components/shared/button-link/CompLink';
import CompButton from '@/app/components/shared/button-link/CompButton';
import CompInput from '@/app/components/shared/form-elements/CompInput';
import MultiLngText from '@/app/components/shared/translator/MultiLngText';
const SignUp = () => {
 return (
  <div className={styles['login__content']}>
   <div className={styles['login__hotel-logo']}>
    <CompLink
     vairiants='icon'
     href={'/'}
     className={styles['login-home__link']}
    >
     <i className='opt-Rexan-Hotel-Logo1'></i>
    </CompLink>
   </div>
   <form className={styles['sign-up__form']}>
    <h3 className='util-mar-b'></h3>
    <div className={styles['sign-up__form-fields']}>
     <div className={styles['sign-up__fields'] + ' util-pad-b-2x'}>
      <ul className={styles['sign-up__fields-list']}>
       <li className='util-mar-b-2x'>
        <CompInput label='کدملی' />
       </li>
       <li className='util-mar-b-2x'>
        <CompInput label='نام' />
       </li>
       <li className='util-mar-b-2x'>
        <CompInput label='نام خانوادگی' />
       </li>
       <li className='util-mar-b-2x'>
        <CompInput label='نام پدر' />
       </li>
       <li className='util-mar-b-2x'>
        <CompInput label='جنسیت' />
       </li>
       <li className='util-mar-b-2x'>
        <CompInput label='ملیت' />
       </li>
       <li>
        <CompInput label='تاریخ تولد' />
       </li>
      </ul>
      <ul className={styles['sign-up__fields-list']}>
       <li className='util-mar-b-2x'>
        <CompInput label='شماره موبایل' />
       </li>
       <li className='util-mar-b-2x'>
        <CompInput label='پست الکترونیک' type='email' />
       </li>
       <li className='util-mar-b-2x'>
        <CompInput label='شماره پاسپورت' />
       </li>
       <li className='util-mar-b-2x'>
        <CompInput label='شماره شناسنامه' />
       </li>
       <li className='util-mar-b-2x'>
        <CompInput label='محل صدور' />
       </li>
       <li>
        <CompInput label='دین' />
       </li>
      </ul>
     </div>
     <div className={styles['sign-up__pass']}>
      <CompInput label='رمز عبور' type='password' />
      <CompInput label='تکرارا رمز عبور' type='password' />
     </div>
    </div>
    <div className={styles['sign-up__confirm']}>
     <CompLink
      vairiants='normal'
      href={'#'}
      className={styles['sign-up__link']}
     >
      <MultiLngText text='ورود به بخش کاربری' />
     </CompLink>
     <CompButton vairiants='gold'>
      <MultiLngText text='ثبت نام' />
     </CompButton>
    </div>
   </form>
  </div>
 );
};

export default SignUp;
