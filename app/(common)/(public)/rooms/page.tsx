import styles from './rooms.module.scss';
import Table from '@/app/components/shared/special-table/Table';

export default function index() {
 return (
  <div
   style={{
    padding: '2rem',
   }}
  >
   <Table>
    <thead>
     <tr>
      <th>
       <div className={styles['inner-cell']}>نام</div>
      </th>
      <th>
       <div className={styles['inner-cell']}>نام خانوادگی</div>
      </th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td>
       <div className={styles['inner-cell']}>حمیدرضا</div>
      </td>
      <td>
       <div className={styles['inner-cell']}>اکبری</div>
      </td>
     </tr>
    </tbody>
   </Table>
  </div>
 );
}
