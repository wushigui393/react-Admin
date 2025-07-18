import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

export interface  DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
export interface RowContextProps {
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  listeners?: SyntheticListenerMap;
}