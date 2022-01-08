import { FormItem } from '../types/formItem';

export const getMaxId = (items: FormItem[]) => {
  if (items.length === 0) {
    return 0;
  }

  return Math.max(...items.map((el) => el.id));
};
