import { ReactNode, MouseEventHandler } from 'react';
export interface ICompInputsBaseProps {
 tools?: ReactNode;
 label?: string;
 fieldsetClassName?: string;
 activeClear?: boolean;
 onClear?: MouseEventHandler<HTMLButtonElement>;
}
export type TSelectOption = { name: string; value: string };
