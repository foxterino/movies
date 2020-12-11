import React from 'react';
import { Space } from 'antd';

interface IIcon {
  icon: React.ForwardRefExoticComponent<any>;
}

const Icon: React.FC<IIcon> = ({ icon, children }) => (
  <Space>
    {React.createElement(icon)}
    {children}
  </Space>
);

export { Icon };
