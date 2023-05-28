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
    {routes.map(({ children, className, id, ...props }, index) => {
     return (
      <li key={index || id} className='master__breadcrumb-item'>
       <Link
        id={id}
        {...props}
        className={`master__breadcrumb-link${addClassName(
         className,
         className
        )}`}
       >
        {children}
       </Link>
      </li>
     );
    })}
   </ul>
  </nav>
 );
};
export default MasterBreadcrumb;
