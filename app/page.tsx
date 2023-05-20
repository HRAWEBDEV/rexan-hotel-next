'use client';
import styles from './page.module.scss';
import Link from 'next/link';
import MasterLayout from './components/layout/MasterLayout';
import Button from '@mui/material/Button';
export default function Home() {
 return (
  <>
   <MasterLayout>
    <Link href='/times'>
     go to times pages
     <i className='opt-eye'></i>
    </Link>
    <Button variant='text'>Text</Button>
   </MasterLayout>
  </>
 );
}
