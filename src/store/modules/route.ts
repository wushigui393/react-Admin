/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-07-17 18:35:47
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-18 11:19:15
 * @FilePath: \react-xs-admin\src\store\modules\route.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createSlice } from '@reduxjs/toolkit';
import type { LocaleId } from '@/locales';
import type { PayloadAction } from '@reduxjs/toolkit';
// import { formatFlatteningRoutes, setUpRoutePath } from '@/router/utils';

export interface AsyncRouteType {
  path: string;
  id: string;
  children: AsyncRouteType[];
}

export interface MultiTabsType {
  label?: string;
  localeLabel?: LocaleId;
  key: string;
}

interface RouteState {
  asyncRouter: AsyncRouteType[];
  // levelAsyncRouter: AsyncRouteType[];
  multiTabs: MultiTabsType[];
}

const initialState: RouteState = {
  asyncRouter: [],
  // levelAsyncRouter: [],
  multiTabs: [],
};

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setStoreAsyncRouter: (state, action: PayloadAction<AsyncRouteType[]>) => {
      state.asyncRouter = action.payload;
      // state.levelAsyncRouter = formatFlatteningRoutes(setUpRoutePath(action.payload));
    },
    setStoreMultiTabs: (state, action: PayloadAction<{ type: 'add' | 'delete' | 'update'; tabs: MultiTabsType }>) => {
      const { type, tabs } = action.payload;
      console.log('type',type);
      console.log('tabs',tabs);
      const tabIndex = state.multiTabs.findIndex(i => i.key === tabs.key);
      switch (type) {
        case 'add':
          if (tabIndex === -1) state.multiTabs.push(tabs);
          break;
        case 'delete':
          if (tabIndex !== -1) state.multiTabs.splice(tabIndex, 1);
          break;
        case 'update':
          if (tabIndex !== -1) state.multiTabs[tabIndex] = tabs;
          break;
        default:
          break;
      }
    },
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { setStoreAsyncRouter, setStoreMultiTabs } = routeSlice.actions;

export default routeSlice.reducer;
