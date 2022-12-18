import { couponDataType } from './../type/couponType';
import axios from 'axios';

export async function fetchCoupon(): Promise<couponDataType[] | null> {
  const dataList = await axios.get('/data/coupons.json'); //서버와 통신한다는 가정하에
  if (!dataList) return null;
  return dataList.data;
}