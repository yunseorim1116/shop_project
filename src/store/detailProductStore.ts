import { productItemType } from './../type/productType';
import create from 'zustand'
import { devtools } from 'zustand/middleware'

interface IDataInfo {
  detailProductData:productItemType|{};
}

const useDetailStore = create<IDataInfo>(set => ({
  detailProductData: {},
}))


// const useStore = create(devtools(useCartStore))

export default useDetailStore