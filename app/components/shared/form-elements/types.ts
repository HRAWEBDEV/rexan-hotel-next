import { ReactNode, MouseEventHandler } from 'react';
export interface ICompInputsBaseProps {
 tools?: ReactNode;
 label?: string;
 fieldsetClassName?: string;
 activeClear?: boolean;
 onClear?: MouseEventHandler<HTMLButtonElement>;
}
export type TSelectOption = string;
export type TSelectVariants = 'select' | 'combo';
