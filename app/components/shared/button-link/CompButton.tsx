import { FC, HTMLProps, HTMLAttributes } from 'react';
import { TCompButtonVariants, TCompButtonTypes } from './types';

interface ICompButtonProps
 extends HTMLProps<HTMLButtonElement>,
  HTMLAttributes<HTMLButtonElement> {
 type?: TCompButtonTypes;
 withLogo?: boolean;
 vairiants?: TCompButtonVariants;
}

const CompButton: FC<ICompButtonProps> = function ({
 children,
 className,
 vairiants,
 type = 'button',
 withLogo = false,
 ...btnProps
}) {
 return (
  <>
   <button
    {...btnProps}
    type={type}
    className={`comp-btn${className ? ' ' + className : ''}${
     vairiants ? ' ' + vairiants : ''
    }`}
    tabIndex={0}
   >
    <div className='comp-btn__info'>
     <div className='comp-btn__txt'>{children}</div>
    </div>
    {withLogo && (
     <div className='comp-btn__ext'>
      <i className='comp-btn__logo opt-ico-r'></i>
     </div>
    )}
   </button>
  </>
 );
};

export default CompButton;
