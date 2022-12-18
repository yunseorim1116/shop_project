export interface productItemType {
    ProductName_kr:string,
    productId: number,
    productName: string,
    imgUrl: string,
    productPrice: number,
    productScore: number,
    availableCoupon?: boolean | undefined,
    isCarted?:boolean,
}

export interface cartedItemType {
    productPrice:number,
    availableCoupon:boolean
    isNoneCheck?:boolean
    imgUrl: string,
    productId: number,
    productName: string,
    totalPrice : number,
    amount : number,

}
