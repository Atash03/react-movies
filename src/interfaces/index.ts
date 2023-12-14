export interface ItemProps {
  title: string;
  year: number;
  type: string;
  src: any;
}

export interface IContext {
  open: boolean;
  toggle: () => void;
  title: string;
  changeTitle: (value: string) => void;
  data: any;
  fillData: (value: any) => void;
  loading: boolean;
  changeLoading: (value: boolean) => void;
}
