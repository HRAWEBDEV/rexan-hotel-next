import { ReactNode } from 'react';
import MasterLayout from '../components/layout/MasterLayout';
import CompLink from '@/app/components/shared/button-link/CompLink';
import styles from './layout.module.scss';
const Layout = ({ children }: { children: ReactNode }) => {
 return (
  <MasterLayout
   withMasterFooter={false}
   withMasterHeader={false}
   withMasterSidenav={false}
  >
   <div className={styles['login__main']}>
    <>{children}</>
   </div>
  </MasterLayout>
 );
};
export default Layout;
