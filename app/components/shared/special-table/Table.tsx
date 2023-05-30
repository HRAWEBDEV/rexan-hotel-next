import styles from './special-table.module.scss';
import addClassName from '@/app/utils/addClass';
import { FC, HTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ITableProps
 extends HTMLProps<HTMLTableElement>,
  HTMLAttributes<HTMLTableElement> {
 containerClassName?: string;
 resClassName?: string;
 children?: ReactNode;
}

const Table: FC<ITableProps> = ({
 containerClassName,
 resClassName,
 className,
 children,
 ...tableProps
}) => {
 return (
  <>
   <div className={styles['comp-sp-tb__container']}>
    <div className={styles['comp-sp-tb__res']}>
     <table
      {...tableProps}
      className={styles['comp-sp-tb'] + `${addClassName(className, className)}`}
     >
      {children}
     </table>
    </div>
   </div>
  </>
 );
};

export default Table;
