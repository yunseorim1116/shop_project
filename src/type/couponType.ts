export interface couponRateType {
    type: string
    couponTitle: string
    discountRate:number,
}
export interface couponAmountType {
    type: string
    couponTitle: string
    discountAmount: number,
}

export interface couponDataType{
    type: string
    couponTitle: string
    discountAmount?:number,
    discountRate?: number,
}