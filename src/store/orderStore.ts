import { cartedItemType } from './../type/productType';
import create from 'zustand'


interface IDataInfo {
    orderList: cartedItemType[]
    setOrderList:(product:cartedItemType[])=>void
}

const useOrderStore = create<IDataInfo>(set => ({
  orderList: [],
  setOrderList: (productData:cartedItemType[]) => set((state)=> {
    return {orderList :  productData }
  }),

}))


export default useOrderStore