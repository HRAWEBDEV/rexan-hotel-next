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
  width: '200',
  height: '200',
 },
 {
  src: '/images/home/about-2.jpg',
  alt: 'gallery images',
  style: { objectFit: 'cover' },
  width: '200',
  height: '200',
 },
 {
  src: '/images/home/about-3.jpg',
  alt: 'gallery images',
  style: { objectFit: 'cover' },
  width: '200',
  height: '200',
 },
 {
  src: '/images/home/about-4.jpg',
  alt: 'gallery images',
  style: { objectFit: 'cover' },
  width: '200',
  height: '200',
 },
 {
  src: '/images/home/about-5.jpg',
  alt: 'gallery images',
  style: { objectFit: 'cover' },
  width: '200',
  height: '200',
 },
];
// *
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
         <Link href={'#'} key={index} className={styles['intro-section__card']}>
          <CompImg {...img} />
         </Link>
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
     <section id='times' className={styles['plans__section']}>
      <h2 className={styles['plans__section-title']}>
       <MultiLngText text='انواع دوره های زمانی هتل رکسان' />
       <span className='header-wing util-f-grow'></span>
      </h2>
      <p className={styles['plans__section-des'] + ' util-read-txt'}>
       <MultiLngText text='شرایط واگذاری واحد ها در هتل رکسان و در قالب حق انتفاع در یک سال قمری به 50 هفته تقسیم شده است. هر دوره اقامتی به مدت یک هفته می باشد و با توجه به مناسبت های بازه زمانی و اهمیت دوره دسته بندی شده است، در این قسمت می توانید با بررسی  انواع بازه های زمانی و بررسی شرایط قیمتی نسبت به انتخاب واحد اقامتی در هر دوره تا 50 سال آینده از حق مالکیت زمانی آن بهرمند شوید' />
      </p>
      <article className={styles['plans__section-view']}>
       <div className={styles['plans__slider-conatiner']}>
        <div className={styles['plans__slider']}>
         <ul className={styles['plans__list']}>
          <li>
           <a className={styles['plans__item']}>
            <h3 className={styles['plans__item-name']}></h3>
            <i
             className={
              styles['plans__item-indicator'] + ' opt-ico-period-perfect'
             }
            ></i>
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
     {/* room types */}
     <section id='rooms' className={styles['room-types__section']}>
      <header className={styles['room-types__header']}>
       <div className={styles['room-types__wrapper']}>
        <h2 className={styles['room-types__title']}>
         <span className='header-wing start'></span>
         <MultiLngText
          text='انواع اتاق های
         هتل'
         />
         <span className='header-wing'></span>
        </h2>
       </div>
       <ul className={styles['room-types__list']}>
        <li className={styles['room-types__item']}>
         <CompLink vairiants='gold' href={'#'}>
          <MultiLngText text='دو تخته' />
         </CompLink>
        </li>
       </ul>
      </header>
      <article className={styles['room-types__view']}>
       <section className={styles['room-types__info']}>
        <div className={styles['room-types__info-wrapper']}>
         <ul className={styles['room-types__desc']}>
          <li>
           <span>
            <MultiLngText text='حداقل ظرفیت:‌ ' />
           </span>
           <span>2</span>
          </li>
          <li>
           <span>
            <MultiLngText text='حداکثر ظرفیت:‌ ' />
           </span>
           <span>5</span>
          </li>
         </ul>
         <div className={styles['room-types__facilities']}>
          <Link className={styles['room-types__facility']} href='#'>
           <div className={styles['room-types__facility-wrapper']}>
            <i className='opt-luxury-room'></i>
           </div>
           <span>
            <MultiLngText text='مبلمان' />
           </span>
          </Link>
         </div>
        </div>
       </section>
       <section className={styles['room-types__images']}>
        <div
         className={
          styles['room-types__image'] + ' ' + styles['room-types__image-slider']
         }
        >
         <CompImgSlider
          activeSliderShow={true}
          slides={[
           {
            src: '/images/home/room-1.jpg',
            width: 400,
            height: 200,
            alt: 'room image',
           },
           {
            src: '/images/home/room-2.jpg',
            width: 400,
            height: 200,
            alt: 'room image',
           },
           {
            src: '/images/home/room-3.jpg',
            width: 400,
            height: 200,
            alt: 'room image',
           },
          ]}
         ></CompImgSlider>
        </div>
        <Link href='#' className={styles['room-types__image']}>
         <CompImg
          width={400}
          height={200}
          alt='room image'
          src={'/images/home/room-4.jpg'}
         />
        </Link>
        <Link href='#' className={styles['room-types__image']}>
         <CompImg
          width={400}
          height={200}
          alt='room image'
          src={'/images/home/room-5.jpg'}
         />
        </Link>
       </section>
      </article>
     </section>
     {/* facilities section */}
     <section id='facilities' className={styles['facilities__section']}>
      <h2 className={styles['facilities-section__title']}>
       <span className='header-wing start'></span>
       <MultiLngText
        text='امکانات هتل
       رکسان'
       />
       <span className='header-wing'></span>
      </h2>
      <article className={styles['facilities__view']}>
       <Link href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={styles['facilities__card-icon'] + ' opt-city-guide'}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='راهنمای تور شهر' />
        </span>
       </Link>
       <Link href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i
          className={styles['facilities__card-icon'] + ' opt-luxury-room'}
         ></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='اتاق های لاکچری' />
        </span>
       </Link>
       <Link href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i
          className={styles['facilities__card-icon'] + ' opt-airport-pickup'}
         ></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='ترانسفر فرودگاه' />
        </span>
       </Link>
       <Link href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={styles['facilities__card-icon'] + ' opt-pool'}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='استخر' />
        </span>
       </Link>
       <Link href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={styles['facilities__card-icon'] + ' opt-wifi'}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='اینترنت رایگان' />
        </span>
       </Link>
       <Link href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={styles['facilities__card-icon'] + ' opt-fastfood'}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='رستوران' />
        </span>
       </Link>
       <Link href='' className={styles['facilities__card']}>
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={styles['facilities__card-icon'] + ' opt-cofee-shop'}></i>
        </div>
        <span className={styles['facilities__card-des']}>
         <MultiLngText text='کافی شاپ' />
        </span>
       </Link>
       <Link
        href=''
        className={
         styles['facilities__card'] + ' ' + styles['facilities__card-more']
        }
       >
        <div className={styles['facilities__card-icon-wrapper']}>
         <i className={styles['facilities__card-icon'] + ' opt-more'}></i>
        </div>
        <span className={styles['facilities__card-des']}></span>
       </Link>
      </article>
     </section>
     {/* news section */}
     <section id='news' className={styles['news__section']}>
      <header className={styles['news__header']}>
       <div className={styles['news-header__wrapper']}>
        <h2 className={styles['news__title']}>
         <MultiLngText text='اخبار پروژه رکسان' />

         <span className='header-wing'></span>
        </h2>
       </div>
       <CompLink vairiants='gold' withLogo={true} href={''}>
        <MultiLngText text='اخبار دیگر'></MultiLngText>
       </CompLink>
      </header>
      <article className={styles['news__view']}>
       <Link href='' className={styles['news__card']}>
        <CompImg
         src={'/images/home/news-1.jpg'}
         alt='news image'
         width='360'
         height='260'
        />
        <div className={styles['news__card-info']}>
         <span className={styles['news__card-des']}>
          <MultiLngText
           text='ارتقاء کیفیت هتل با
          تغییر هتل 4 ستاره به 5 ستاره'
          />
         </span>
        </div>
       </Link>
       <Link href='' className={styles['news__card']}>
        <CompImg
         src={'/images/home/news-2.jpg'}
         alt='news image'
         width='360'
         height='260'
        />
        <div className={styles['news__card-info']}>
         <span className={styles['news__card-des']}>
          <MultiLngText
           text='خرید زمین به متراژ
          4275 متر مربع جهت محوطه سازی'
          />
         </span>
        </div>
       </Link>
       <Link href='' className={styles['news__card']}>
        <CompImg
         src={'/images/home/news-3.jpg'}
         alt='news image'
         width='360'
         height='260'
        />
        <div className={styles['news__card-info']}>
         <span className={styles['news__card-des']}>
          <MultiLngText
           text=' خرید زمین به متراژ
          2743 متر مربع جهت ساخت 12 استخر و سالن ورزشی'
          />
         </span>
        </div>
       </Link>
       <Link href='' className={styles['news__card']}>
        <CompImg
         src={'/images/home/news-4.jpg'}
         alt='news image'
         width='360'
         height='260'
        />
        <div className={styles['news__card-info']}>
         <span className={styles['news__card-des']}>
          <MultiLngText
           text='خرید زمین به متراژ
          2078 متر مربع جهت ساخت پارکینگ طبفاتی با ظرفیت 400 اتومبیل'
          />
         </span>
        </div>
       </Link>
       <Link href='' className={styles['news__card']}>
        <CompImg
         src={'/images/home/news-5.jpg'}
         alt='news image'
         width='360'
         height='260'
        />
        <div className={styles['news__card-info']}>
         <span className={styles['news__card-des']}>
          <MultiLngText
           text='اضافه شدن 2 آسانسور
          جدید جهت خدمات رسانی بهینه در طبقات هتل'
          />
         </span>
        </div>
       </Link>
       <Link href='' className={styles['news__card']}>
        <CompImg
         src={'/images/home/news-6.jpg'}
         alt='news image'
         width='360'
         height='260'
        />
        <div className={styles['news__card-info']}>
         <span className={styles['news__card-des']}>
          <MultiLngText
           text='ساخت سالن بوئینگ و
          روف گاردن در طبقه 14 (پشت بام هتل)'
          />
         </span>
        </div>
       </Link>
      </article>
     </section>
    </div>
   </MasterLayout>
  </>
 );
}
