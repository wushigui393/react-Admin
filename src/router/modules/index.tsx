import { FormattedMessage } from '@/components/FormattedMessage';
import Layout from '@/layout';
import Authority from '@/layout/Authority';
import { AppstoreOutlined, DatabaseOutlined, HomeOutlined, UserSwitchOutlined,ProjectOutlined,UsbOutlined,BarChartOutlined } from '@ant-design/icons';
import type { RouteList } from '@/router/route';
import {
  DetailsInfo,
  DetailsPage,
  DetailsParams,
  Home,
  Menu1_1,
  Menu1_2,
  Permissions,
  TestPermissionsA,
  TestPermissionsB,
  FormView,
  TableView,
  PdfView,
  WaterMarkView,
  G2View,
  S2View,
  G6View
} from '../lazy/view';
import { ErrorElement, ErrorPage403, Login, Refresh } from '../lazy/whiteList';

export const defaultRoute: RouteList[] = [
  {
    path: '/home',
    id: 'Home',
    element: <Home />,
    handle: { label: <FormattedMessage id="layout.memu.home" />, icon: <HomeOutlined /> },
  },
  {
    path: '/components',
    id: 'Components',
    redirect: '/components/form',
    handle: { label: <FormattedMessage id="layout.memu.components" />, icon: <ProjectOutlined /> },
    children: [
      {
        path: 'form',
        id: 'Form',
        element: <FormView />,
        handle: { label: <FormattedMessage id="layout.memu.form" /> },
      },
      {
        path: 'table',
        id: 'Table',
        element: <TableView />,
        handle: { label: <FormattedMessage id="layout.memu.table" /> },
      }
    ],
  },
  {
    path: '/functions',
    id: 'Functions',
    redirect: '/functions/watermark',
    handle: { label: <FormattedMessage id="layout.memu.functions" />, icon:<UsbOutlined /> },
    children: [
      {
        path: 'watermark',
        id: 'Watermark',
        element: <WaterMarkView />,
        handle: { label: <FormattedMessage id="layout.memu.waterMark" /> },
      },
      {
        path: 'pdf',
        id: 'Pdf',
        element: <PdfView />,
        handle: { label: <FormattedMessage id="layout.memu.pdf" /> },
      },
   
    ]
  },
  {
    path: '/Visualization',
    id: 'Visualization',
    redirect: '/Visualization/g2',
    handle: { label: <FormattedMessage id="layout.memu.Visualization" />, icon: <BarChartOutlined /> },
    children: [
      {
        path: 'g2',
        id: 'G2',
        element: <G2View />,
        handle: { label: <FormattedMessage id="layout.memu.G2" /> },
      },
      {
        path: 's2',
        id: 'S2',
        element: <S2View />,
        handle: { label: <FormattedMessage id="layout.memu.S2" /> },
      },
      {
        path: 'g6',
        id: 'G6',
        element: <G6View />,
        handle: { label: <FormattedMessage id="layout.memu.G6" /> },
      },
    ]
  },
  {
    path: '/nested',
    id: 'Nested',
    redirect: '/nested/menu1',
    handle: { label: <FormattedMessage id="layout.memu.nesting" />, icon: <AppstoreOutlined /> },
    children: [
      {
        path: 'menu1',
        id: 'Menu1',
        redirect: '/nested/menu1/menu1-1',
        handle: { label: 'menu-1' },
        children: [
          {
            path: 'menu1-1',
            id: 'Menu1-1',
            element: <Menu1_1 />,
            handle: { label: 'menu-1-1' },
          },
          {
            path: 'menu1-2',
            id: 'Menu1-2',
            element: <Menu1_2 />,
            handle: { label: 'menu-1-2' },
          },
        ],
      },
    ],
  },
  {
    path: '/power',
    id: 'Power',
    redirect: '/power/permissions',
    handle: {
      label: <FormattedMessage id="layout.memu.permissions" />,
      icon: <UserSwitchOutlined />,
    },
    children: [
      {
        path: 'permissions',
        id: 'Permissions',
        element: <Permissions />,
        handle: { label: <FormattedMessage id="layout.memu.permissionsPage" /> },
      },
      {
        path: 'test-permissions-a',
        id: 'TestPermissionsA',
        element: <TestPermissionsA />,
        handle: { label: <FormattedMessage id="layout.memu.testPermissionsPage1" /> },
      },
      {
        path: 'test-permissions-b',
        id: 'TestPermissionsB',
        element: <TestPermissionsB />,
        handle: { label: <FormattedMessage id="layout.memu.testPermissionsPage2" /> },
      },
    ],
  },
  {
    path: '/details-page',
    id: 'DetailsPage',
    alwaysShow: false,
    handle: { label: <FormattedMessage id="layout.memu.detailsPage" />, whiteList: true },
    children: [
      {
        path: '',
        id: 'DetailsList',
        element: <DetailsPage />,
        handle: {
          label: <FormattedMessage id="layout.memu.detailsPage" />,
          icon: <DatabaseOutlined />,
        },
      },
      {
        path: 'details-info',
        id: 'DetailsInfo',
        element: <DetailsInfo />,
        handle: { label: '详情页', hideSidebar: true },
      },
      {
        path: 'details-params/:id',
        id: 'DetailsParams',
        element: <DetailsParams />,
        handle: { label: '详情页', hideSidebar: true },
      },
    ],
  },
];

export const whiteList: RouteList[] = [
  {
    path: '*',
    element: <ErrorPage403 />,
  },
  {
    path: '/refresh/*',
    element: <Refresh />,
    handle: { label: '', hideSidebar: true, whiteList: true },
  },
];

export const baseRouter: RouteList[] = [
  {
    path: '/',
    element: (
      <Authority>
        <Layout />
      </Authority>
    ),
    errorElement: <ErrorElement pageType="Layout" />,
    children: [...whiteList],
  },
  {
    path: '/login',
    element: <Login />,
  },
];
