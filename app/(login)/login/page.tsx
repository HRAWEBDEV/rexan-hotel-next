import styles from './login.module.scss';
import CompLink from '../../components/shared/button-link/CompLink';
import CompSelect from '../../components/shared/form-elements/CompSelect';
import CompInput from '../../components/shared/form-elements/CompInput';
import MultiLngText from '../../components/shared/translator/MultiLngText';
// *
const Login = () => {
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
   <form className={styles['sign-in']}>
    <h3 className='util-mar-b-2x'>
     <MultiLngText text='ورود به پنل کاربری' />
    </h3>
    <ul className='sign-in__list'>
     <li className='util-mar-b-2x'>
      <CompSelect label='نوع فعالیت کاربر'></CompSelect>
     </li>
     <li className='util-mar-b-2x'>
      <CompInput type='email' label='ایمیل'></CompInput>
     </li>
     <li className='util-mar-b-2x'>
      <CompInput type='password' label='رمز عبور'></CompInput>
     </li>
    </ul>
    <div className={styles['sign-in__links']}>
     <CompLink
      className={styles['sign-in__link']}
      vairiants='normal'
      href={'/login/forget-password'}
     >
      <MultiLngText text='رمز عبور خود را فراموش کرده ام' />
     </CompLink>
     <CompLink
      className={styles['sign-in__link']}
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
export default Login;
