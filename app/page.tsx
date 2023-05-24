'use client';
import styles from './page.module.scss';
import MasterLayout from './components/layout/MasterLayout';
import CompImgSlider from './components/shared/imageSlider/CompImgSlider';
export default function Home() {
 return (
  <>
   <MasterLayout>
    <div className={styles['master__conatiner']}>
     <section className={styles['master__hero-section']}>
      <CompImgSlider
       showNavigators={false}
       showIndicators={false}
       slides={[
        {
         src: '/images/hotel-view.jpg',
         alt: 'hero image',
         fill: true,
         style: { 'object-position': 'right bottom' },
        },
       ]}
      ></CompImgSlider>
     </section>
     <section className={styles['quick-reserve__section']}>
      <form className={styles['quick-reserve__form']}>
       <div className={styles['quick-reserve__fields']}>
        <div className={styles['quick-reserve__field']}></div>
        <div className={styles['quick-reserve__field']}></div>
        <div className={styles['quick-reserve__field']}></div>
       </div>
      </form>
     </section>
    </div>
   </MasterLayout>
  </>
 );
}
