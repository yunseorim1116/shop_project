# Description

```
- React & TypeScript를 활용하여 개발 진행
- Zustand를 통한 상태관리
- Emotion-Styled CSS를 통한 CSS 구현
- 1540x700 기준
```

## 프로젝트 실행 방법

```
npm install
npm run start
```



## ✍️ 요약
```
- React/TypeScript 를 사용해 만든 개인 쇼핑몰 프로젝트입니다.
- 어떠한 프레임워크 / 라이브러리에 구애받지 않고 다양한 기술 스택을 사용해 프로젝트를 제작해보고 싶어서
  만들게 된 1인 미니 프로젝트입니다.
- 데이터는 크림 사이트를 참고하여 직접 제작했습니다.
```


## 🖥 담당한 기능 (FE)
```
- 쇼핑몰 리스트 출력
- InterSection Observe를 사용하여 보고 있는 product의 이름을 출력
- 장바구니 담기 / 빼기
- 페이지네이션
- React Portal 을 사용하여 Modal Arlet 구현
- 수량 추가 / 빼기 / SelectBox 선택에 따른 물건의 총 가격 계산
- 쿠폰 사용함에 따라 다른 가격 출력
```
# 전체적인 렌딩 페이지


![GIF 2022-12-19 오후 8-39-51](https://user-images.githubusercontent.com/94429667/209568261-e3a33e68-36f1-44b7-9b31-8d36636af321.gif)




- InterSection Observe를 이용해 지속적으로 관찰하여 현재 보고 있는 상품의 이름을 띄워줍니다.
- 담기 / 빼기 버튼을 누르면  카트에 담긴 물건의 갯수가 업데이트 됩니다.
- React Portal을 사용하여 상품을 담을때마다 전역으로 알럿창을 띄웁니다.





</br>
</br>
</br>
</br>
</br>



# 장바구니 체크 리스트

![22](https://user-images.githubusercontent.com/94429667/209568346-9d80cced-9fbb-4ce1-8532-30edb47c18dd.gif)




- 선택한 상품의 총 가격을 계산합니다.
- 셀렉트 박스가 체크되지 않은 상품은 총 가격에서 제외됩니다.
- 체크되지 않은 상품은 수량을 올려도 총 가격에 포함되지 않습니다.
- 맨 위의 셀렉트 박스를 클릭하면 모든 상품이 추가/제외되고 가격 또한 동시에 반영이 됩니다.

</br>
</br>
</br>
</br>
</br>

# 장바구니 리스트

![445](https://user-images.githubusercontent.com/94429667/209568593-9a9edbce-c776-4b6b-a8ac-2b0ca2b70e84.gif)

- 할인쿠폰 아이콘을 클릭하면 보유하고 있는 쿠폰이 뜹니다.
- 선택한 쿠폰의 할인률 만큼 가격 할인이 됩니다.
- 그 외 할인률 쿠폰이 적용 불가능한 상품들을 제외하고 할인률이 계산이 됩니다.

</br>
</br>
</br>
</br>
</br>

## Structure

```
src
 ┣ common
 ┃ ┣ cartButtonStyle.ts
 ┃ ┣ productButtonStyle.ts
 ┃ ┗ string.ts
 ┣ component
 ┃ ┣ cart
 ┃ ┃ ┣ CartItem.tsx
 ┃ ┃ ┣ CartItemHeader.tsx
 ┃ ┃ ┣ CartNoneData.tsx
 ┃ ┃ ┣ CartProcess.tsx
 ┃ ┃ ┗ CouponList.tsx
 ┃ ┣ product
 ┃ ┃ ┗ ProductItemList.tsx
 ┃ ┗ share
 ┃ ┃ ┣ Button.tsx
 ┃ ┃ ┣ CartTotalPrice.tsx
 ┃ ┃ ┣ Modal.tsx
 ┃ ┃ ┣ Pagination.tsx
 ┃ ┃ ┗ ProductInfo.tsx
 ┣ container
 ┃ ┣ cart
 ┃ ┃ ┣ CartContainer.tsx
 ┃ ┃ ┣ CheckoutContainer.tsx
 ┃ ┃ ┗ CouponContainer.tsx
 ┃ ┣ layout
 ┃ ┃ ┣ MainFooterContainer.tsx
 ┃ ┃ ┗ MainHeaderContainer.tsx
 ┃ ┗ product
 ┃ ┃ ┣ ProductContainer.tsx
 ┃ ┃ ┣ ProductDetailContainer.tsx
 ┃ ┃ ┗ ProductItemContainer.tsx
 ┣ font
 ┃ ┣ BebasNeue-Regular.ttf
 ┃ ┣ Mulish-Italic-VariableFont_wght.ttf
 ┃ ┣ NotoSansKR-Bold.otf
 ┃ ┗ NotoSansKR-Light.otf
 ┣ layout
 ┃ ┗ LayoutContainer.tsx
 ┣ navigation
 ┃ ┣ AppRouter.tsx
 ┃ ┗ routePath.ts
 ┣ store
 ┃ ┣ cartStore.ts
 ┃ ┣ detailProductStore.ts
 ┃ ┗ orderStore.ts
 ┣ style
 ┃ ┗ globalStyle.ts
 ┣ type
 ┃ ┣ couponType.ts
 ┃ ┗ productType.ts
 ┣ util
 ┃ ┣ fetchCoupon.ts
 ┃ ┣ fetchProduct.ts
 ┃ ┣ processData.ts
 ┃ ┗ storage.ts
 ┣ views
 ┃ ┣ CartPage.tsx
 ┃ ┣ CheckOrderPage.tsx
 ┃ ┣ MainHomePage.tsx
 ┃ ┗ ProductDetailPage.tsx
 ┣ font.css
 ┣ index.tsx
 ┣ PortalModal.tsx
 ┗ ScrollToTop.tsx
```
