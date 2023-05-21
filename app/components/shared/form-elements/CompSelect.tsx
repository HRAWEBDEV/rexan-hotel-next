import {
 FC,
 useState,
 MouseEventHandler,
 HTMLAttributes,
 HTMLProps,
} from 'react';
import { ICompInputsBaseProps, TSelectOption } from './types';
// *
interface ICompSelectProps
 extends ICompInputsBaseProps,
  HTMLAttributes<HTMLSelectElement>,
  HTMLProps<HTMLSelectElement> {
 options?: TSelectOption[];
 onChangeOption?: (option: TSelectOption) => void;
}
// *
const CompSelect: FC<ICompSelectProps> = ({
 tools,
 activeClear,
 onClear,
 value,
 fieldsetClassName,
 options = [],
 onChangeOption,
 label,
 className,
 ...selectProps
}) => {
 const [isOptionsListOpen, setIsOptionsListOpen] = useState(false);
 const onSelectClick: MouseEventHandler<HTMLDivElement> = (e) => {
  setIsOptionsListOpen((state) => !state);
 };
 const onOptionClick = (option: TSelectOption) => {
  onChangeOption && onChangeOption(option);
 };
 const onClearClick: MouseEventHandler<HTMLButtonElement> = (e) => {
  onClear && onClear(e);
 };
 // *
 return (
  <fieldset
   className={`comp-input__fieldset select${
    fieldsetClassName ? ' ' + fieldsetClassName : ''
   }`}
  >
   <div
    className={`comp-input${className ? ' ' + className : ''}`}
    onClick={onSelectClick}
    tabIndex={0}
   ></div>
   <select {...selectProps} className='comp-input__select'>
    {options.map((option) => {
     return (
      <option key={option.value} value={option.value}>
       {option.value}
      </option>
     );
    })}
   </select>
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
    <i className='opt-arrow-down'></i>
   </div>
   {isOptionsListOpen && (
    <div className='comp-combo__options'>
     <ul className='comp-combo__list'>
      {options.map((option) => {
       return (
        <li
         key={option.value}
         onClick={() => onOptionClick(option)}
         className='comp-combo__item'
         tabIndex={0}
        >
         {option.value}
        </li>
       );
      })}
     </ul>
    </div>
   )}
  </fieldset>
 );
};

export default CompSelect;
