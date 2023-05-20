import Link from 'next/link';
import React from 'react';
export default function MasterHeader() {
 return (
  <>
   <header className='master__header'>
    <div className='master__header-dash start'>
     <Link
      href={'/'}
      className='master-aside__logo'
      aria-label='go home'
     ></Link>
    </div>
    <div className='master__header-dash end'></div>
    <div className='master__nav-container'></div>
    <div className='master-card__wrapper'></div>
   </header>
  </>
 );
}
