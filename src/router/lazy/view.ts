/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-07-18 17:39:48
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-22 11:52:43
 * @FilePath: \react-xs-admin\src\router\lazy\view.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: WSG 1783627061@qq.com
 * @Date: 2025-07-18 17:39:48
 * @LastEditors: WSG 1783627061@qq.com
 * @LastEditTime: 2025-07-22 11:52:19
 * @FilePath: \react-xs-admin\src\router\lazy\view.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { lazy } from 'react';

export const Home = lazy(() => import('@/views/Home'));
export const Menu1_1 = lazy(() => import('@/views/Nested/Menu1/Menu1-1'));
export const Menu1_2 = lazy(() => import('@/views/Nested/Menu1/Menu1-2'));
export const Permissions = lazy(() => import('@/views/Power/Permissions'));
export const TestPermissionsA = lazy(() => import('@/views/Power/test-permissions-a'));
export const TestPermissionsB = lazy(() => import('@/views/Power/test-permissions-b'));
export const DetailsPage = lazy(() => import('@/views/DetailsPage'));
export const DetailsInfo = lazy(() => import('@/views/DetailsPage/DetailsInfo'));
export const DetailsParams = lazy(() => import('@/views/DetailsPage/DetailsParams'));

//表单组件
export const FormView = lazy(() => import('@/views/UnitView/FormView'));
//表格组件
export const TableView = lazy(() => import('@/views/UnitView/TableView'));
//水印组件
export const WaterMarkView = lazy(() => import('@/views/Functions/WaterMark'));
//PDF组件
export const PdfView = lazy(() => import('@/views/Functions/Pdf'));
//可视化组件G2
export const G2View = lazy(() => import('@/views/Visualization/G2View'));
//S2
export const S2View=lazy(() => import('@/views/Visualization/S2View'));
//G6
export const G6View=lazy(() => import('@/views/Visualization/G6View'));






