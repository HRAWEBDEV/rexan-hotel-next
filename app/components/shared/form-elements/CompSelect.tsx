import {
 FC,
 useState,
 useEffect,
 MouseEventHandler,
 HTMLAttributes,
 HTMLProps,
 useRef,
} from 'react';
import { ICompInputsBaseProps, TSelectOption, TSelectVariants } from './types';
// *
interface ICompSelectProps
 extends ICompInputsBaseProps,
  HTMLAttributes<HTMLSelectElement>,
  HTMLProps<HTMLSelectElement> {
 options?: TSelectOption[];
 openOptionsList?: boolean;
 variants?: TSelectVariants;
 onChangeOption?: (option: TSelectOption) => void;
}
// *
const CompSelect: FC<ICompSelectProps> = ({
 tools,
 onClear,
 value,
 fieldsetClassName,
 onChangeOption,
 label,
 className,
 options = [],
 variants = 'select',
 activeClear = true,
 openOptionsList = false,
 ...selectProps
}) => {
 const [isFocused, setIsFocused] = useState(false);
 const [isOptionsListOpen, setIsOptionsListOpen] = useState(false);
 const inputRef = useRef<HTMLDivElement>(null);
 const toggleOptionList = (action?: boolean) => {
  setIsOptionsListOpen((state) => (action != undefined ? action : !state));
 };
 const onSelectClick: MouseEventHandler<HTMLDivElement> = (e) => {
  if (!isFocused) return;
  toggleOptionList();
 };
 const onOptionClick = (option: TSelectOption) => {
  onChangeOption && onChangeOption(option);
 };
 const onClearClick: MouseEventHandler<HTMLButtonElement> = (e) => {
  onClear && onClear(e);
 };
 // * on select focus
 const onInputFocus = function () {
  setIsFocused((state) => !state);
  toggleOptionList();
 };
 const onInputBlur = function () {
  setIsFocused((state) => !state);
  toggleOptionList();
 };
 useEffect(() => {
  inputRef.current?.addEventListener('focus', onInputFocus);
  inputRef.current?.addEventListener('blur', onInputBlur);
  return () => {
   inputRef.current?.removeEventListener('blur', onInputBlur);
   inputRef.current?.removeEventListener('focus', onInputFocus);
  };
 }, [isFocused]);
 // * use effect controlling options list open or close state
 useEffect(() => {
  toggleOptionList(openOptionsList);
 }, [openOptionsList]);
 // * default select markup
 return (
  <fieldset
   aria-expanded={isOptionsListOpen ? true : false}
   className={`comp-input__fieldset select${
    fieldsetClassName ? ' ' + fieldsetClassName : ''
   }`}
  >
   <div
    ref={inputRef}
    className={`comp-input${className ? ' ' + className : ''}${
     value ? ' not-empty' : ''
    }`}
    onPointerDown={onSelectClick}
    tabIndex={0}
   >
    {value}
   </div>
   <span className='comp-input__indicator'></span>
   <select {...selectProps} className='comp-input__select'>
    {options.map((option) => {
     return (
      <option key={option} value={option}>
       {option}
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
         key={option}
         onPointerDown={() => onOptionClick(option)}
         className='comp-combo__item'
         tabIndex={0}
        >
         {option}
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
