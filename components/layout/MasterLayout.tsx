import React from 'react';
import MasterHeader from './MasterHeader';
import MasterSideNav from './MasterSideNav';
import MasterFooter from './MasterFooter';
export default function MasterLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <>
   <div className='master__conatiner'>
    <MasterHeader></MasterHeader>
    <div className='master__content'>
     <MasterSideNav></MasterSideNav>
     <main className='master__main'>
      {children}
      <MasterFooter></MasterFooter>
     </main>
    </div>
   </div>
  </>
 );
}
