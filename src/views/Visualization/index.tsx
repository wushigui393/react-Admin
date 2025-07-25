/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-07-22 09:47:58
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-22 09:48:20
 * @FilePath: \react-xs-admin\src\views\Visualization\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

const Visualization: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default Visualization;
