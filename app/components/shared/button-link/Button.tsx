import React, { HTMLProps, HtmlHTMLAttributes, FC } from 'react';
interface IButtonComponentProps
 extends HTMLProps<HTMLButtonElement>,
  HtmlHTMLAttributes<HTMLButtonElement> {
 type?: 'button' | 'reset' | 'submit';
 withLogo?: boolean;
 buttonType?: 'normal' | 'gold' | 'confirm' | 'red' | 'gold-outline';
}

const Button: FC<IButtonComponentProps> = ({
 children,
 className,
 buttonType,
 type = 'button',
 withLogo = false,
 ...btnProps
}) => {
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

export default Button;
