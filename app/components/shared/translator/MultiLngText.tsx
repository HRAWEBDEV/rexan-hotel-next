import React, { FC } from 'react';
interface IMultiLngProps {
 dbenum?: number;
 text: string;
}
const MultiLngText: FC<IMultiLngProps> = ({ text }) => {
 return <>{text}</>;
};

export default MultiLngText;
