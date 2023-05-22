'use client';
import styles from './page.module.scss';
import MasterLayout from './components/layout/MasterLayout';
import CompSelect from './components/shared/form-elements/CompSelect';
import { TSelectOption } from './components/shared/form-elements/types';
import CompInput from './components/shared/form-elements/CompInput';
import { useState } from 'react';

export default function Home() {
 const [options, setOptions] = useState<TSelectOption[]>([
  'پراید',
  'سمند',
  'بنز',
 ]);
 const [value, setValue] = useState<TSelectOption>(options[0]);

 const onChangeOption = (newOption: TSelectOption) => {
  setValue(newOption);
 };
 // *
 return (
  <>
   <MasterLayout>
    <div style={{ display: 'flex', gap: '2rem', marginTop: '4rem' }}>
     <CompSelect
      label='ماشین ها'
      value={value}
      options={options}
      onChangeOption={onChangeOption}
      onClear={() => {
       setValue('');
      }}
     ></CompSelect>
     <CompInput type='checkbox' label='ماشین ها'></CompInput>
    </div>
   </MasterLayout>
  </>
 );
}
