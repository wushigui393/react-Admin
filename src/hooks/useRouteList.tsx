/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-07-17 18:35:47
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-18 11:14:00
 * @FilePath: \react-xs-admin\src\hooks\useRouteList.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ErrorElement } from '@/router/lazy/whiteList';
import { Typography } from 'antd';
import { redirect } from 'react-router';
import type { MenuItem, RouteList } from '@/router/route';
import type { RouteObject } from 'react-router';

const { Text } = Typography;

export const useRouteList = () => {
  function handleRouteList(list: RouteList[]): RouteObject[] {
    return list.map((i: RouteList) => {
      const item: RouteObject = {
        path: i.path,
        id: i.id,
        element: i.element,
      };

      if (i.element) {
        item.errorElement = <ErrorElement pageType="Page" />;
      }

      if (i.children) {
        item.children = handleRouteList(i.children);
        if (i.redirect && item.children.length) {
          item.children.push({
            index: true,
            loader() {
              return redirect(i.redirect || '');
            },
          });
        }
      }

      return item;
    });
  }

  function routeListToMenu(rtList: RouteList[], path?: React.Key): MenuItem[] {
    const menuList: MenuItem[] = [];
    rtList.forEach((i: RouteList) => {
      const item = i;
      if (item.handle.hideSidebar) return;

      if (!item.alwaysShow && item.alwaysShow !== undefined && !item.element) {
        if (item.children && item.children[0]) {
          menuList.push(routeListToMenu([item.children[0]], item.path)[0]);
          return;
        }
      }

      let rtItem: MenuItem = {
        key: item.path,
        label: '',
      };

      if (path) {
        rtItem.key = item.path ? `${path}/${item.path}` : path;
      }

      rtItem = {
        ...rtItem,
        label: (
          <Text style={{ color: 'currentcolor' }} ellipsis={{ tooltip: item.handle.label }}>
            {item.handle.label}
          </Text>
        ),
        icon: item.handle.icon,
      };

      if (item.children && !item.element) {
        rtItem.children = routeListToMenu(item.children, rtItem.key);
      }

      menuList.push(rtItem);
    });

    return menuList;
  }

  return { handleRouteList, routeListToMenu };
};
