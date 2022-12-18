import axios from 'axios';
import { productItemType } from '../type/productType';

export async function fetchProduct(): Promise<productItemType[] | null> {
  const dataList = await axios.get('/data/productItem.json');
  if (!dataList) return null;
  return dataList.data;
}