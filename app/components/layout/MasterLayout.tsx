import React from 'react';
import MasterHeader from './MasterHeader';
import MasterFooter from './MasterFooter';
import MasterSidenav from './MasterSidenav';
// *
interface IMasterLayoutProps {
 withMasterFooter?: boolean;
 withMasterHeader?: boolean;
 withMasterSidenav?: boolean;
 children?: React.ReactNode;
}
// *
export default function MasterLayout({
 children,
 withMasterFooter = true,
 withMasterHeader = true,
 withMasterSidenav = true,
}: IMasterLayoutProps) {
 return (
  <>
   <div className='master__conatiner'>
    {withMasterHeader && <MasterHeader />}
    <div className='master__content'>
     {withMasterSidenav && <MasterSidenav />}
     <main data-master-main='' className='master__main'>
      {children}
      {withMasterFooter && <MasterFooter />}
     </main>
    </div>
   </div>
  </>
 );
}
