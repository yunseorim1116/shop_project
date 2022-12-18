import { cartedItemType } from './../type/productType';
  export const setProductWithExpireTime = (keyName: string, keyValue: cartedItemType[], tts: string) => {
    const CartData = {
      value: keyValue,
      expire: Date.now() + tts,
    };

    const CartDataString = JSON.stringify(CartData);
    localStorage.setItem(keyName, CartDataString);
  };

  export const getProductWithExpireTime = (keyName: string) => {
    const cartData = localStorage.getItem(keyName);
    if (!cartData) return null;
    const cartedData = JSON.parse(cartData);

    if (Date.now() > cartedData.expire) {
      localStorage.removeItem(keyName);
      return null;
    }
    return cartedData.value;
  };