import { ReactNode, FC, HTMLAttributes } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { TCompButtonVariants } from './types';
interface ICompLinkProps
 extends NextLinkProps,
  HTMLAttributes<HTMLAnchorElement> {
 children?: ReactNode;
 className?: string;
 withLogo?: boolean;
 vairiants?: TCompButtonVariants;
 issueType?: 'inner' | 'normal';
}
// * there is an issue with next js inner page navigation links (solved with temporary issueType == inner)
const CompLink: FC<ICompLinkProps> = function ({
 href,
 prefetch,
 replace,
 scroll,
 shallow,
 locale,
 children,
 withLogo,
 className,
 vairiants,
 issueType,
 ...linkProps
}) {
 if (issueType == 'inner')
  return (
   <a
    href={typeof href == 'string' ? href : ''}
    className={`comp-btn${className ? ' ' + className : ''}${
     vairiants ? ' ' + vairiants : ''
    }`}
    {...linkProps}
   >
    <div className='comp-btn__info'>
     <div className='comp-btn__txt'>{children}</div>
    </div>
    {withLogo && (
     <div className='comp-btn__ext'>
      <i className='comp-btn__logo opt-ico-r'></i>
     </div>
    )}
   </a>
  );
 // *
 return (
  <NextLink
   href={href}
   replace={replace}
   scroll={scroll}
   shallow={shallow}
   locale={locale}
   className={`comp-btn${className ? ' ' + className : ''}${
    vairiants ? ' ' + vairiants : ''
   }`}
   {...linkProps}
   passHref
  >
   <div className='comp-btn__info'>
    <div className='comp-btn__txt'>{children}</div>
   </div>
   {withLogo && (
    <div className='comp-btn__ext'>
     <i className='comp-btn__logo opt-ico-r'></i>
    </div>
   )}
  </NextLink>
 );
};

export default CompLink;
