import { useRouteList } from '@/hooks/useRouteList';
import { handlePowerRoute } from '@/router/utils';
import { useAppSelector } from '@/store/hooks';
import { useMemo } from 'react';

export const useMenuList = () => {
  const asyncRouter = useAppSelector(state => state.route.asyncRouter);
  console.log('asyncRouter1111111',asyncRouter);
  const { routeListToMenu } = useRouteList();
  // console.log('asyncRouter1',handlePowerRoute(asyncRouter));
  const menuList = useMemo(() => {
    return routeListToMenu(handlePowerRoute(asyncRouter));
  }, [asyncRouter]);
  return { menuList };
};
