/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-07-17 18:35:47
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-18 10:10:24
 * @FilePath: \react-xs-admin\src\layout\components\AppLogo\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import logo from '@/assets/logo.png';
import { Image, theme } from 'antd';
import { memo } from 'react';
import './index.less';

const AppLogo = memo(() => {
  const thme = theme.useToken();

  return (
    <div className="app-logo">
      <div className="logo">
        <Image width={38} src={logo} preview={false} />
      </div>
      <div className="name" style={{ color: thme.token.colorText }}>
        reAdmin
      </div>
    </div>
  );
});

export default AppLogo;
