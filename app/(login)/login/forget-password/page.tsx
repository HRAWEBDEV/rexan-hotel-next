import styles from './forget-password.module.scss';
import CompLink from '@/app/components/shared/button-link/CompLink';
import CompButton from '@/app/components/shared/button-link/CompButton';
import CompInput from '@/app/components/shared/form-elements/CompInput';
import MultiLngText from '@/app/components/shared/translator/MultiLngText';

const ForgetPassword = () => {
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
   <form>
    <h3 className='util-mar-b-2x'>
     <MultiLngText text='بازیابی رمز عبور' />
    </h3>
    <div className='util-mar-b-2x'>
     <CompInput label='پست الکترونیک / موبایل'></CompInput>
    </div>
    <CompButton
     vairiants='gold'
     className={styles['forget-pass__confirm'] + ' util-mar-b-2x'}
    >
     <MultiLngText text='بازیابی رمز عبور' />
    </CompButton>
    <div className={styles['forget-pass__links']}>
     <CompLink
      className={styles['forget-in__link']}
      vairiants='normal'
      href={'/login/forget-password'}
     >
      <MultiLngText text='ورود به بخش کاربری' />
     </CompLink>
     <CompLink
      className={styles['forget-in__link']}
      vairiants='normal'
      href={'/login/sign-up'}
     >
      <MultiLngText text='ساخت اکانت کاربری جدید' />
     </CompLink>
    </div>
   </form>
  </div>
 );
};

export default ForgetPassword;
