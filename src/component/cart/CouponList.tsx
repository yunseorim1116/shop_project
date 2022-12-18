import styled from "@emotion/styled";
import { couponDataType } from "../../type/couponType";
export interface IProps {
  coupon: couponDataType;
  selectCouponData: couponDataType;
  selectCoupon: (coupon: couponDataType) => void;
}
const CouponList = ({ coupon, selectCouponData, selectCoupon }: IProps) => {
  return (
    <>
      <CouponDiv
        coupon={coupon}
        selectCouponData={selectCouponData}
        onClick={() => selectCoupon(coupon)}
      >
        {coupon.couponTitle}
      </CouponDiv>
    </>
  );
};

interface Coupon {
  coupon: couponDataType;
  selectCouponData: couponDataType;
}
const CouponDiv = styled.div<Coupon>`
  cursor: pointer;
  font-family: "NotoSansKR";
  font-size: 21px;
  margin: 5px 0px;
  max-width: 250px;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
  border: ${(props) =>
    props.selectCouponData === props.coupon
      ? "1px solid #000000;"
      : "1px solid #e8e8e8;"};
`;

export default CouponList;
