import { FC, HTMLAttributes } from 'react';
import Link, { LinkProps } from 'next/link';
import addClassName from '../../utils/addClass';
// *
interface IRoutes extends LinkProps, HTMLAttributes<HTMLAnchorElement> {}
interface IMasterBreadcrumbProps {
 routes: IRoutes[];
}
// *
const MasterBreadcrumb: FC<IMasterBreadcrumbProps> = ({ routes }) => {
 return (
  <nav aria-label='breadcurmb navigation' className='master__breadcrumb-nav'>
   <ul className='master__breadcrumb-list'>
    <li className='master__breadcrumb-item'>
     {/* <a className='master__breadcrumb-link'></a> */}
     {routes.map(({ className, ...props }) => {
      return (
       <Link
        {...props}
        className={`master__breadcrumb-link${addClassName(
         className,
         className
        )}`}
       ></Link>
      );
     })}
    </li>
   </ul>
  </nav>
 );
};
export default MasterBreadcrumb;
