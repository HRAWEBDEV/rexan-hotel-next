'use client';
import { useEffect, useRef } from 'react';
import CompLink from '@/app/components/shared/button-link/CompLink';
import MultiLngText from '@/app/components/shared/translator/MultiLngText';
import createIntersectionObserve, {
 ITargetObserverCb,
} from '@/app/utils/intersectionObserver';
// *
export default function MasterSidenav() {
 // useEffect(() => {
 //  const masterMainEl = document.querySelector(
 //   '[data-master-main=""]'
 //  ) as HTMLDivElement;
 //  const masterAsideEl = document.querySelector("[master-aside='']");
 //  const navLinksEl = Array.from(
 //   masterAsideEl!.querySelectorAll('[data-master-quick-link]')
 //  ) as HTMLAnchorElement[];
 //  const masterMainSections = Array.from(
 //   masterMainEl!.querySelectorAll('[data-home-sections=""]')
 //  ) as HTMLDivElement[];

 //  const observerCallBack: ITargetObserverCb = (entry) => {
 //   const { isIntersecting, target, intersectionRatio } = entry;
 //   if (!isIntersecting || intersectionRatio <= 0.8) return;
 //   console.log(entry);
 //   const targetSectionId = target.id;
 //   navLinksEl.forEach((link) => {
 //    const linkHref = link.href;
 //    link.classList.remove('is-selected');
 //    if (!linkHref.includes(targetSectionId) || !targetSectionId) return;
 //    link.classList.add('is-selected');
 //   });
 //  };

 //  const { intersectionObserver, addSubscriber } = createIntersectionObserve({
 //   root: masterMainEl,
 //   threshold: [0.8],
 //  });
 //  masterMainSections.forEach((section) => {
 //   addSubscriber(section, observerCallBack);
 //  });
 //  // *
 //  return () => {
 //   intersectionObserver.disconnect();
 //  };
 // }, []);

 return (
  <>
   <aside master-aside='' className='master__aside'>
    <div className='master__aside-content'>
     <nav className='master__quick-nav'>
      <ul className='master__quick-list'>
       <li className='master__quick-item'>
        <CompLink
         data-master-quick-link=''
         vairiants='normal'
         className='master__quick-link'
         href={'#introduction'}
         issueType='inner'
        >
         <MultiLngText text='هتل رکسان کربلا' />
        </CompLink>
       </li>
       <li className='master__quick-item'>
        <CompLink
         data-master-quick-link=''
         vairiants='normal'
         className='master__quick-link'
         href={'#discovery'}
         issueType='inner'
        >
         <MultiLngText text='کشف هتل رکسان' />
        </CompLink>
       </li>
       <li className='master__quick-item'>
        <CompLink
         data-master-quick-link=''
         vairiants='normal'
         className='master__quick-link'
         href={'#times'}
         issueType='inner'
        >
         <MultiLngText text='انواع دوره های زمانی' />
        </CompLink>
       </li>
       <li className='master__quick-item'>
        <CompLink
         data-master-quick-link=''
         vairiants='normal'
         className='master__quick-link'
         href={'#rooms'}
         issueType='inner'
        >
         <MultiLngText text='انواع اتاق های هتل' />
        </CompLink>
       </li>
       <li className='master__quick-item'>
        <CompLink
         data-master-quick-link=''
         vairiants='normal'
         className='master__quick-link'
         href={'#facilities'}
         issueType='inner'
        >
         <MultiLngText text='انواع امکانات هتل' />
        </CompLink>
       </li>
       <li className='master__quick-item'>
        <CompLink
         data-master-quick-link=''
         vairiants='normal'
         className='master__quick-link'
         href={'#news'}
         issueType='inner'
        >
         <MultiLngText text='اخبار پروژه رکسان' />
        </CompLink>
       </li>
      </ul>
     </nav>
     <ul className='master-aside__socials'>
      <li className='master-aside__social'>
       <CompLink
        href={'#'}
        vairiants='gold'
        className='master-aside__social-link'
       >
        <i className='opt-telephone-circle util-fn-2'></i>
       </CompLink>
      </li>
      <li className='master-aside__social'>
       <CompLink
        href={'#'}
        vairiants='gold'
        className='master-aside__social-link'
       >
        <i className='opt-telegram-circle util-fn-2'></i>
       </CompLink>
      </li>
      <li className='master-aside__social'>
       <CompLink
        href={'https://instagram.com/karbalarexanhotel?igshid=YmMyMTA2M2Y='}
        vairiants='gold'
        className='master-aside__social-link'
       >
        <i className='opt-instagram-circle util-fn-2'></i>
       </CompLink>
      </li>
      <li className='master-aside__social'>
       <CompLink
        href={'#'}
        vairiants='gold'
        className='master-aside__social-link'
       >
        <i className='opt-facebook-circle util-fn-2'></i>
       </CompLink>
      </li>
     </ul>
    </div>
   </aside>
  </>
 );
}
