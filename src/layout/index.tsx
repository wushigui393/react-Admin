/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-07-17 18:35:47
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-18 17:11:19
 * @FilePath: \react-xs-admin\src\layout\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Layout, theme } from 'antd';
import React from 'react';

import AppMain from './components/AppMain/AppMain';
import Navbart from './components/Navbart';
import SidebarInline from './components/Sidebar/SidebarInline';
import './index.less';

const { Footer } = Layout;

const LayoutApp: React.FC = () => {
  const thme = theme.useToken();

  return (
    <div className="layout flex" style={{ color: thme.token.colorText }}>
      <SidebarInline />
      <Layout>
        <Navbart />
        <AppMain />
        <Footer style={{ textAlign: 'center', padding: 14 }}>Ant Design ©2025 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
};

export default LayoutApp;
