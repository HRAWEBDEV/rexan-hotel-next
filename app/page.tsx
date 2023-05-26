import { useState } from 'react';
import Link from 'next/link';
import CompImg, {
 ICompImgProps,
} from './components/shared/imageLazyLoader/CompImg';
import styles from '@/app/page.module.scss';
import MasterLayout from '@/app/components/layout/MasterLayout';
import CompImgSlider from '@/app/components/shared/imageSlider/CompImgSlider';
import CompSelect from '@/app/components/shared/form-elements/CompSelect';
import CompButton from '@/app/components/shared/button-link/CompButton';
import MultiLngText from '@/app/components/shared/translator/MultiLngText';
import CompLink from './components/shared/button-link/CompLink';
// * gallery images
const introductionImages: ICompImgProps[] = [
 {
  src: '/images/home/about-1.jpg',
  alt: 'gallery images',
  style: { objectFit: 'cover' },
  fill: true,
 },
 {
  src: '/images/home/about-2.jpg',
  alt: 'gallery images',
  style: { objectFit: 'cover' },
  fill: true,
 },
 {
  src: '/images/home/about-3.jpg',
  alt: 'gallery images',
  style: { objectFit: 'cover' },
  fill: true,
 },
 {
  src: '/images/home/about-4.jpg',
  alt: 'gallery images',
  style: { objectFit: 'cover' },
  fill: true,
 },
 {
  src: '/images/home/about-5.jpg',
  alt: 'gallery images',
  style: { objectFit: 'cover' },
  fill: true,
 },
];

export default function Home() {
 return (
  <>
   <MasterLayout>
    <div className={styles['master__conatiner']}>
     {/* hero section */}
     <section className={styles['master__hero-section']}>
      <CompImgSlider
       showNavigators={false}
       showIndicators={false}
       slides={[
        {
         src: '/images/hotel-view.jpg',
         alt: 'hero image',
         fill: true,
         style: { objectPosition: 'right bottom' },
        },
       ]}
      ></CompImgSlider>
     </section>
     {/* quick reserve section */}
     <section className={styles['quick-reserve__section']}>
      <form className={styles['quick-reserve__form']}>
       <div className={styles['quick-reserve__fields']}>
        <div className={styles['quick-reserve__field']}>
         <CompSelect label='دوره' variants='select'></CompSelect>
        </div>
        <div className={styles['quick-reserve__field']}>
         <CompSelect label='نوع اتاق' variants='select'></CompSelect>
        </div>
        <div className={styles['quick-reserve__field']}>
         <CompSelect label='طبقه' variants='select'></CompSelect>
        </div>
       </div>
       <CompButton vairiants='gold' className={styles['quick-reserve__link']}>
        <MultiLngText text='بررسی وضعیت' />
       </CompButton>
      </form>
     </section>
     {/* introduction section */}
     <section id='introduction' className={styles['intro__section']}>
      <h1 className={styles['intro__section__title']}>
       <span className='header-wing start'></span>
       <MultiLngText text='با قرارداد مالکیت زمانی رکسان صاحب خانه، در کربلا شوید' />
       <span className='header-wing'></span>
      </h1>
      <article className={styles['intro-section__gallery']}>
       {introductionImages.map((img, index) => {
        return (
         <div key={index} className={styles['intro-section__card']}>
          <CompImg {...img} />
         </div>
        );
       })}
      </article>
     </section>
     {/* introduction section */}
     <section id='discovery' className={styles['discovery__section']}>
      <h2 className={styles['discover__section-title']}>
       <MultiLngText text='معرفی هتل' />
       <span className='header-wing util-f-grow'></span>
      </h2>
      <article className={styles['discover__section-content']}>
       <div className={styles['discover__section-info']}>
        <p className={styles['discover__section-des'] + ' util-read-txt'}>
         <MultiLngText
          text='مجموعه اقامتی هتل 5
         ستاره رکسان کربلا در فاصله 980 متری از بین الحرمین و در خیابان باب
         البغداد در زمینی به مساحت 19،200 متر مربع و زیربنای 93،000 متر مربع در
         14 طبقه در حال ساخت می باشد طراحی و معماری چشم انداز هتل مطابق با
         بالاترین استانداردهای بین المللی، بهترین امکانات تفریحی، خدماتی و ورزشی
         را برای شما مهیا می کند، همچنین برخورداری از اتاق های مجهز و متنوع می
         تواند شرایط و تسهیلات استثنایی برای متقاضیانی که به دنبال فرصت های
         سرمایه گذاری و تامین مکان مناسب و دائمی در سفر به عتبات هستند فراهم
         نماید در محموعه هتل رکسان می توانید با بررسی و انتخاب هر یک از دوره
         های از پیش تهیه شده، نسبت به عقد قرارداد مالکیت زمانی به مدت 50 سال
         قمری از مدت تحویل صاحب واحد اقامتی شوید و از ملک خود لذت ببرید.'
         />
        </p>
        <div className={styles['discover__section-more']}>
         <CompLink vairiants='gold' withLogo={true} href='/floors'>
          <MultiLngText text='معرفی هتل'></MultiLngText>
         </CompLink>
        </div>
       </div>
       <Link className={styles['discover__section-view']} href='/floors'>
        <CompImg
         src={'/images/home/discover-hotel-banner.jpg'}
         className={styles['discover__section-img']}
         alt='discover hotel'
         width={'500'}
         height={'500'}
        />
       </Link>
      </article>
     </section>
     {/* times section */}
     <section id='times' className='plans__section'>
      <h2 className='plans__section-title'>
       <MultiLngText text='انواع دوره های زمانی هتل رکسان' />
       <span className='header-wing'></span>
      </h2>
      <p className='plans__section-des util-read-txt'>
       <MultiLngText text='شرایط واگذاری واحد ها در هتل رکسان و در قالب حق انتفاع در یک سال قمری به 50 هفته تقسیم شده است. هر دوره اقامتی به مدت یک هفته می باشد و با توجه به مناسبت های بازه زمانی و اهمیت دوره دسته بندی شده است، در این قسمت می توانید با بررسی  انواع بازه های زمانی و بررسی شرایط قیمتی نسبت به انتخاب واحد اقامتی در هر دوره تا 50 سال آینده از حق مالکیت زمانی آن بهرمند شوید' />
      </p>
      <article className='plans__section-view'>
       <div className='plans__slider-conatiner'>
        <div className='plans__slider'>
         <ul className='plans__list'>
          <li>
           <a className='plans__item awesome'>
            <h3 className='plans__item-name'></h3>
            <i className='plans__item-indicator'></i>
            <p>
             <span></span>
             <span></span>
            </p>
           </a>
          </li>
         </ul>
        </div>
       </div>
      </article>
     </section>
    </div>
   </MasterLayout>
  </>
 );
}
