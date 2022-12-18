import React, { useEffect, useRef, useState } from "react";
import CouponList from "../../component/cart/CouponList";
import { couponDataType } from "../../type/couponType";
import { fetchCoupon } from "../../util/fetchCoupon";
import styled from "@emotion/styled";

export interface IProps {
  setCouponData: React.Dispatch<React.SetStateAction<couponDataType[]>>;
  couponData: couponDataType[];
  selectCoupon: (coupon: couponDataType) => void;
  selectCouponData: couponDataType;
}
const CouponContainer = ({
  setCouponData,
  couponData,
  selectCoupon,
  selectCouponData,
}: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropDownIcon = useRef<HTMLImageElement>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    toggleDropDown();
  };

  const getData = async () => {
    const resultData = await fetchCoupon();
    if (!resultData) return;
    setCouponData(resultData);
  };

  const toggleDropDown = () => {
    if (!dropDownIcon.current) return;

    if (isModalOpen) {
      dropDownIcon.current.style.transform = "rotate(180deg)";
      return;
    }
    dropDownIcon.current.style.transform = "rotate(0deg)";
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <CouponInfoContainer>
        <CouponText onClick={toggleModal}>
          할인쿠폰 총 <Span>{couponData.length}</Span>개 보유
          <IconImg src="/assets/icon/dropdown_down.svg" ref={dropDownIcon} />
        </CouponText>

        <CouponListContainer>
          {isModalOpen ? (
            <CouponListWrap>
              {couponData.map((coupon: couponDataType) => {
                return (
                  <CouponList
                    coupon={coupon}
                    selectCouponData={selectCouponData}
                    selectCoupon={selectCoupon}
                  />
                );
              })}
            </CouponListWrap>
          ) : (
            ""
          )}
        </CouponListContainer>
      </CouponInfoContainer>
    </>
  );
};

const CouponInfoContainer = styled.div`
  margin-top: 80px;
  width: 600px;
`;

const CouponListContainer = styled.div`
  border-top: 1px solid rgb(228, 228, 228);
`;

const Span = styled.span`
  font-family: "Mulish";
`;
const CouponText = styled.p`
  width: 600px;
  border-top: 2px solid rgb(0, 0, 0);
  font-family: "NotoSansKR-Light";
  padding: 30px 3px;
  font-size: 25px;
`;

const IconImg = styled.img`
  margin-left: 5px;
  cursor: pointer;
`;

const CouponListWrap = styled.div`
  border-bottom: 1px solid;
  margin-bottom: 25px;
  padding: 35px 0px;
`;

export default CouponContainer;
