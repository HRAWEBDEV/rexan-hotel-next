import { FC, HTMLProps, HTMLAttributes } from 'react';
import { TCompButtonVariants } from './types';

interface IButtonComponentProps
 extends HTMLProps<HTMLButtonElement>,
  HTMLAttributes<HTMLButtonElement> {
 type?: 'button' | 'reset' | 'submit';
 withLogo?: boolean;
 buttonType?: TCompButtonVariants;
}

const CompButton: FC<IButtonComponentProps> = function ({
 children,
 className,
 buttonType,
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
     buttonType ? ' ' + buttonType : ''
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
