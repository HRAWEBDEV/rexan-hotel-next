'use client';
import { useRef, useEffect } from 'react';
import Script from 'next/script';
import CompLink from '../shared/button-link/CompLink';
import MultiLngText from '../shared/translator/MultiLngText';
const mapsCoordinates = [
 [35.72619901135786, 51.407632269565354],
 [32.6257785, 44.045028],
];
export default function MasterFooter() {
 const mapRef = useRef<{ current: null | HTMLDivElement }[]>([
  { current: null },
  { current: null },
 ]);
 const onMapScriptLoaded = () => {
  // console.log('map loaded', L);
  // mapsCoordinates.forEach((coordinate, index) => {
  //  const mapFrame = L.map(mapRef.current[index].current, {
  //   attributionControl: false,
  //   fullscreenControl: true,
  //   fullscreenControlOptions: {
  //    position: 'topleft',
  //   },
  //  }).setView(coordinate, 14);
  //  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   maxZoom: 19,
  //  }).addTo(mapFrame);
  //  L.marker(coordinate, {}).addTo(mapFrame);
  // });
 };
 return (
  <>
   <footer className='master__footer'>
    <section className='master__footer-top'>
     <div className='master__footer-top-links'>
      <div className='ms__footer-nav'>
       <h3 className='ms__footer-nav-title'>
        <MultiLngText text='هتل رکسان' />
       </h3>
       <ul className='ms__footer-nav-list'>
        <li className='ms__footer-nav-item'>
         <CompLink
          vairiants='normal'
          className='ms__footer-nav-link'
          href={'#'}
         >
          <MultiLngText text='هلدینگ رکسان' />
         </CompLink>
        </li>
        <li className='ms__footer-nav-item'>
         <CompLink
          vairiants='normal'
          className='ms__footer-nav-link'
          href={'#'}
         >
          <MultiLngText text='درباره هتل' />
         </CompLink>
        </li>
        <li className='ms__footer-nav-item'>
         <CompLink
          vairiants='normal'
          className='ms__footer-nav-link'
          href={'#'}
         >
          <MultiLngText text='کشف هتل' />
         </CompLink>
        </li>
        <li className='ms__footer-nav-item'>
         <CompLink
          vairiants='normal'
          className='ms__footer-nav-link'
          href={'#'}
         >
          <MultiLngText text='شرایط تسهیلات تایم شیرینگ' />
         </CompLink>
        </li>
        <li className='ms__footer-nav-item'>
         <CompLink
          vairiants='normal'
          className='ms__footer-nav-link'
          href={'#'}
         >
          <MultiLngText text='قوانین و شرایط عمومی هتل' />
         </CompLink>
        </li>
       </ul>
      </div>
      <ul className='ms__footer-quick-nav'>
       <li className='ms__footer-quick-item'>
        <CompLink
         vairiants='normal'
         className='ms__footer-quick-link'
         href={'#'}
        >
         <MultiLngText text='امکانات هتل' />
        </CompLink>
       </li>
       <li className='ms__footer-quick-item'>
        <CompLink
         vairiants='normal'
         className='ms__footer-quick-link'
         href={'#'}
        >
         <MultiLngText text='واحدهای اقامتی' />
        </CompLink>
       </li>
       <li className='ms__footer-quick-item'>
        <CompLink
         vairiants='normal'
         className='ms__footer-quick-link'
         href={'#'}
        >
         <MultiLngText text='تقویم آنلاین' />
        </CompLink>
       </li>
       <li className='ms__footer-quick-item'>
        <CompLink
         vairiants='normal'
         className='ms__footer-quick-link'
         href={'#'}
        >
         <MultiLngText text='پیگیری قرارداد' />
        </CompLink>
       </li>
      </ul>
      <ul className='ms__footer-quick-nav'>
       <li className='ms__footer-quick-item'>
        <CompLink
         vairiants='normal'
         className='ms__footer-quick-link'
         href={'#'}
        >
         <MultiLngText text='اخبار هتل' />
        </CompLink>
       </li>
       <li className='ms__footer-quick-item'>
        <CompLink
         vairiants='normal'
         className='ms__footer-quick-link'
         href={'#'}
        >
         <MultiLngText text='همکاری با ما' />
        </CompLink>
       </li>
       <li className='ms__footer-quick-item'>
        <CompLink
         vairiants='normal'
         className='ms__footer-quick-link'
         href={'#'}
        >
         <MultiLngText text='تماس با ما' />
        </CompLink>
       </li>
      </ul>
     </div>
     <div className='master__footer-partners'>
      <a href='' className='master__footer-partner'>
       <img src='/images/alrawadatain-logo.png' alt='company logo' />
      </a>
      <a href='' className='master__footer-partner'>
       <img src='/images/rh-logo.png' alt='company logo' />
      </a>
     </div>
    </section>
    <section className='master__footer-middle'>
     <div className='master__footer-contact'>
      <h3 className='ms__footer-contact-title util-mar-b'>
       <MultiLngText
        text='مرکز رزرواسیون
       تهران'
       />
      </h3>
      <ul>
       <li className='util-mar-b-small'>
        <span>
         <MultiLngText text='آدرس' />
        </span>
        <span>
         <MultiLngText
          text='تهران -
         خیابان سید جمال الدین اسدآبادی - نبش خیابان 14 - ساختمان ویرا - پلاک
         128 - طبقه 4'
         />
        </span>
       </li>
       <li className='util-mar-b-small'>
        <span>
         <MultiLngText text='تلفن' />
        </span>
        <div className='master__footer-contact-num'>
         <span>+</span>
         <span>
          <MultiLngText text='(98)' />
         </span>
         <span>
          <MultiLngText text='2186124013' />
         </span>
        </div>
       </li>
       <li className='util-mar-b-small'>
        <span>
         <MultiLngText text='دورنگار' />
        </span>
        <div className='master__footer-contact-num'>
         <span>+</span>
         <span>
          <MultiLngText text='(98)' />
         </span>
         <span>
          <MultiLngText text='2186124166' />
         </span>
        </div>
       </li>
       <li className='util-mar-b-2x'>
        <span>
         <MultiLngText
          text='پست
         الکترونیک'
         />
        </span>
        <span>
         <MultiLngText text='Info@Karbalarexanhotel.com' />
        </span>
       </li>
      </ul>
      <div className='map' ref={(el) => (mapRef.current[0].current = el)}></div>
     </div>
     <div className='master__footer-contact'>
      <h3 className='ms__footer-contact-title util-mar-b'>
       <MultiLngText
        text='مرکز رزرواسیون
       عراق'
       />
      </h3>
      <ul>
       <li className='util-mar-b-small'>
        <span>
         <MultiLngText text='آدرس' />
        </span>
        <span>
         <MultiLngText
          text='عراق -
         کربلا - منطقه باب بغداد - خیابان الحیابی'
         />
        </span>
       </li>
       <li className='util-mar-b-small'>
        <span>
         <MultiLngText text='تلفن' />
        </span>
        <div className='master__footer-contact-num'>
         <span>+</span>
         <span>
          <MultiLngText text='(964)' />
         </span>
         <span>
          <MultiLngText text='7710312913' />
         </span>
        </div>
       </li>
       <li className='util-mar-b-small'>
        <span>
         <MultiLngText text='دورنگار' />
        </span>
        <div className='master__footer-contact-num'>
         <span>+</span>
         <span>
          <MultiLngText text='(964)' />
         </span>
         <span>
          <MultiLngText text='7710312913' />
         </span>
        </div>
       </li>
       <li className='util-mar-b-2x'>
        <span>
         <MultiLngText
          text='پست
         الکترونیک'
         />
        </span>
        <span>
         <MultiLngText text='Kanani.omidrey@gmail.com' />
        </span>
       </li>
      </ul>
      <div className='map' ref={(el) => (mapRef.current[1].current = el)}></div>
     </div>
    </section>
    <section className='master__footer-rights'>
     <span>
      <MultiLngText
       text='تمامی حقوق
      این وبسایت متعلق به شرکت رکسان است'
      />
     </span>
    </section>
   </footer>
   <Script
    src='https://unpkg.com/leaflet@1.9.3/dist/leaflet.js'
    crossOrigin='anonymous'
    integrity='sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM='
    onLoad={() => {
     onMapScriptLoaded();
    }}
   />
  </>
 );
}
