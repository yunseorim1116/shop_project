import { productItemType, cartedItemType } from './../type/productType';

export const divideCartedData = (productData: productItemType[], storeCart :cartedItemType[] ) => {
    productData.forEach((product: productItemType) => {
      product.isCarted = false;
    });

    productData.forEach((product: productItemType) => {
      storeCart.forEach((cartedItem: cartedItemType) => {
        if (product.productId === cartedItem.productId) product.isCarted = true;
      });
    });
  };

 export const arrangeItemScore = (productData: productItemType[]) => {
    const sortedProductData = productData.sort((a, b) => b.productScore - a.productScore);
    return sortedProductData;
  };

  export const calculatePrice = (product: cartedItemType[]) => {
    const totalCartedAmount = product.reduce((a: number, b: any) => a + b.totalPrice, 0);
    return totalCartedAmount;
  };

   export const checkAvailableCoupon = (product: cartedItemType[]) => {
      return  product.filter(
        (product: cartedItemType) => product.availableCoupon
      );
    };

   export const checkNoneAvailableCoupon = (product: cartedItemType[]) => {
      return product.filter(
        (product: cartedItemType) => !product.availableCoupon
      );;
    };


  const calculateNoneCouponPrice = ()=>{

  }



