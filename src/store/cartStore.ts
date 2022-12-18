import { cartedItemType } from './../type/productType';
import create from 'zustand'


interface IDataInfo {
  cartedProduct: cartedItemType[];
  addCartItem: (productData:cartedItemType)=> void;
  removeCartedItem:(selectedItemId:number)=> void;
  plusCartAmount:(productData:cartedItemType)=> void;
  minusCartAmount:(productData:cartedItemType)=> void;
  setCheckOrderItem:(productData:cartedItemType[])=> void;
  checkedProduct:cartedItemType[]
  resetCart:()=> void;
}

const useCartStore = create<IDataInfo>(set => ({
  cartedProduct: [],
  checkedProduct:[],

  setCheckOrderItem: (productData:cartedItemType[]) => set((state)=> {
    return {checkedProduct :  productData }
  }),

  resetCart: () => set((state)=> {
    state.cartedProduct = []
    return {checkedProduct :  [...state.cartedProduct] }
  }),

  addCartItem: (productData:cartedItemType) => set(state => ({
  cartedProduct: [...state.cartedProduct, productData ]})),

  plusCartAmount:(productData:cartedItemType) => set(state => {

    const itemIdx =  state.cartedProduct.findIndex(
      (item: cartedItemType) => item.productId === productData.productId
    );

    if(state.cartedProduct[itemIdx].amount >= 3  )  return { cartedProduct : [...state.cartedProduct ] }


    state.cartedProduct[itemIdx].amount += 1
    state.cartedProduct[itemIdx].totalPrice = state.cartedProduct[itemIdx].productPrice * state.cartedProduct[itemIdx].amount
     return { cartedProduct : [...state.cartedProduct ] }
  }),

  minusCartAmount:(productData:cartedItemType) => set((state) => {

    const itemIdx =  state.cartedProduct.findIndex(
      (item: cartedItemType) => item.productId === productData.productId
    );
    if(state.cartedProduct[itemIdx].amount ===1 )  return { cartedProduct : [...state.cartedProduct ] }

    state.cartedProduct[itemIdx].amount -= 1
    state.cartedProduct[itemIdx].totalPrice = state.cartedProduct[itemIdx].productPrice * state.cartedProduct[itemIdx].amount

     return { cartedProduct : [...state.cartedProduct ] }
  }),

   removeCartedItem:(selectedItemId:number) => set(state => ({
    cartedProduct: state.cartedProduct.filter((product:cartedItemType)=> product.productId !== selectedItemId)
    })


   ),
}))


export default useCartStore