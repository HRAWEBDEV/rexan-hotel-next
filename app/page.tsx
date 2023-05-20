'use client';
import styles from './page.module.scss';
import MasterLayout from './components/layout/MasterLayout';
import Link from 'next/link';
export default function Home() {
 return (
  <>
   <MasterLayout>
    <Link rel='stylesheet' prefetch={true} href='/times'>
     times page
    </Link>
   </MasterLayout>
  </>
 );
}
