import CompLink from '../shared/button-link/CompLink';
import MultiLngText from '../shared/translator/MultiLngText';
export default function MasterSidenav() {
 return (
  <>
   <aside className='master__aside'>
    <div className='master__aside-content'>
     <nav className='master__quick-nav'>
      <ul className='master__quick-list'>
       <li className='master__quick-item'>
        <CompLink
         vairiants='normal'
         className='master__quick-link'
         href={'#introduction'}
        >
         <MultiLngText text='هتل رکسان کربلا' />
        </CompLink>
       </li>
       <li className='master__quick-item'>
        <CompLink
         vairiants='normal'
         className='master__quick-link'
         href={'#discovery'}
        >
         <MultiLngText text='کشف هتل رکسان' />
        </CompLink>
       </li>
       <li className='master__quick-item'>
        <CompLink
         vairiants='normal'
         className='master__quick-link'
         href={'#times'}
        >
         <MultiLngText text='انواع دوره های زمانی' />
        </CompLink>
       </li>
       <li className='master__quick-item'>
        <CompLink
         vairiants='normal'
         className='master__quick-link'
         href={'#rooms'}
        >
         <MultiLngText text='انواع اتاق های هتل' />
        </CompLink>
       </li>
       <li className='master__quick-item'>
        <CompLink
         vairiants='normal'
         className='master__quick-link'
         href={'#facilities'}
        >
         <MultiLngText text='انواع امکانات هتل' />
        </CompLink>
       </li>
       <li className='master__quick-item'>
        <CompLink
         vairiants='normal'
         className='master__quick-link'
         href={'#news'}
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
