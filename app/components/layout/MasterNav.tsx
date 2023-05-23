import { FC } from 'react';
import CompLink from '../shared/button-link/CompLink';
import MultiLngText from '../../components/shared/translator/MultiLngText';
import { motion } from 'framer-motion';
// *
interface IMasterNavProps {}
// *
const MasterNav: FC<IMasterNavProps> = () => {
 return (
  <>
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='master__nav-container'
   >
    <nav className='master__nav'>
     <div className='master__nav-category'>
      <h3 className='master__nav-category-title'>
       <MultiLngText text='هتل رکسان' />
      </h3>
      <ul className='master__nav-category-list'>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='درباره گروه رکسان
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText text='کشف هتل' />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='شرایط تسهیلات تایم شیرینگ
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='قوانین و شرایط عمومی هتل
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='شرکای تجاری
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='همکاری با ما
         '
         />
        </CompLink>
       </li>
      </ul>
     </div>
     <div className='master__nav-category'>
      <h3 className='master__nav-category-title'>
       <MultiLngText text='واحدهای اقامتی' />
      </h3>
      <ul className='master__nav-category-list'>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText text='استدیو دو تخته دبل' />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='استدیو دو تخته توئین
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='سوئیت استاندارد
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='سوئیت جونیور
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText text='سوئیت لوکس' />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='سوئیت رویال
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText text='سوئیت پرزیدنتال' />
        </CompLink>
       </li>
      </ul>
     </div>
     <div className='master__nav-category'>
      <h3 className='master__nav-category-title'>
       <MultiLngText text='مجموعه های تفریحی' />
      </h3>
      <ul className='master__nav-category-list'>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='استخر آقایان
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText text='استخر بانوان' />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='حمام ترکی
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText text='ماساژ' />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='سالن ورزشی
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='اتاق کودک
         '
         />
        </CompLink>
       </li>
      </ul>
     </div>
     <div className='master__nav-category'>
      <h3 className='master__nav-category-title'>
       <MultiLngText
        text='رستوران ها
       '
       />
      </h3>
      <ul className='master__nav-category-list'>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='رستوران ایرانی
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText text='رستوران سنتی' />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='رستوران بین المللی
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText text='کافی شاپ روف گاردن' />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='کافی شاپ لابی
         '
         />
        </CompLink>
       </li>
      </ul>
     </div>
     <div className='master__nav-category'>
      <h3 className='master__nav-category-title'>
       <MultiLngText
        text='سالن های همایش
       '
       />
      </h3>
      <ul className='master__nav-category-list'>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='سالن کنفرانس
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='سالن آفی تئاتر
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText text='اتاق جلسات' />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText text='سالن مجالس' />
        </CompLink>
       </li>
      </ul>
     </div>
     <div className='master__nav-category'>
      <ul className='master__nav-category-list'>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='تقویم آنلاین
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='پیگیری قرارداد
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='گالری تصاویر
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText text='سوالات متداول' />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='اخبار هتل
         '
         />
        </CompLink>
       </li>
       <li className='master__nav-category-item'>
        <CompLink
         className='master__nav-category-link'
         vairiants='normal'
         href={'#'}
        >
         <MultiLngText
          text='تماس با ما
         '
         />
        </CompLink>
       </li>
      </ul>
     </div>
    </nav>
   </motion.div>
  </>
 );
};

export default MasterNav;
