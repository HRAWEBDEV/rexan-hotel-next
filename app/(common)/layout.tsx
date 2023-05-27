import React from 'react';
import MasterLayout from '../components/layout/MasterLayout';
export default function layout({ children }: { children: React.ReactNode }) {
 return <MasterLayout withMasterSidenav={false}>{children}</MasterLayout>;
}
