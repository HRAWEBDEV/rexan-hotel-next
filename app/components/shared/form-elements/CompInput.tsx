import { FC, HTMLAttributes, HTMLProps, MouseEventHandler } from 'react';
import { ICompInputsBaseProps } from './types';
// *
interface ICompInputProps
 extends HTMLProps<HTMLInputElement>,
  HTMLAttributes<HTMLInputElement>,
  ICompInputsBaseProps {}
// *
const CompInput: FC<ICompInputProps> = ({
 tools,
 label,
 fieldsetClassName,
 className,
 value,
 onClear,
 activeClear = true,
 type = 'text',
 ...inputProps
}) => {
 const onClearClick: MouseEventHandler<HTMLButtonElement> = (e): void => {
  onClear && onClear(e);
 };
 // * radio and checkbox
 if (type == 'checkbox' || type == 'radio') {
  return (
   <fieldset
    className={`comp-check__fieldset${
     fieldsetClassName ? ' ' + fieldsetClassName : ''
    }`}
   >
    <input
     {...inputProps}
     type={type}
     value={value}
     className={`${type == 'checkbox' ? 'comp-check' : 'comp-radio'}${
      className ? ' ' + className : ''
     }`}
    />
    <label className='comp-check__label'>{label}</label>
   </fieldset>
  );
 }
 // * other inputs
 return (
  <fieldset
   data-comp-select-wrapper
   className={`comp-input__fieldset${
    fieldsetClassName ? ' ' + fieldsetClassName : ''
   }`}
  >
   <input
    {...inputProps}
    type={type}
    value={value}
    className={`comp-input${className ? ' ' + className : ''}${
     value ? ' not-empty' : ''
    }`}
   />
   <span className='comp-input__indicator'></span>
   <label className='comp-input__label'>{label}</label>
   <div className='comp-input__tools'>
    {tools}
    {activeClear && value && (
     <button
      onClick={onClearClick}
      className='comp-input__tool util-hover-cl--red'
     >
      <i className='opt-trash-can'></i>
     </button>
    )}
   </div>
  </fieldset>
 );
};

export default CompInput;
