# Description

## 29CM프론트엔드 주니어 과제 전형

```
- https://for29cm.netlify.app/
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

## 요구사항 구현 완료 항목

```

1. 상품 목록 페이지
  A. 각 상품은 가격과 사진, 상품 제목을 표시합니다

  B. 상품의 score를 기준으로 내림차순으로 정렬하여 5개씩 보여주는 페이지네이션을 구현합니다

  C. 각 상품에는 장바구니 버튼이 있습니다
    a. 상품이 장바구니에 담겨 있지 않은 경우 - 담기 버튼을 구현합니다
    b. 상품이 장바구니에 담겨 있는 경우 - 빼기 버튼을 구현합니다

2. 장바구니 페이지
  A. 장바구니에는 최대 3개의 상품이 담길 수 있습니다

  B. 장바구니의 상품 중 결제에 포함할 상품을 체크박스 등의 UI로 선택할 수 있습니다

  C. 장바구니에 담긴 각 상품의 수량을 조정할 수 있습니다
    a.단, 최소 1개의 수량이 지정되어야 합니다

  D. 장바구니에 담긴 전체 상품의 최종 결제 금액에 대하여 쿠폰을 적용할 수 있습니다
    a. 두 가지 type을 가지고 있는 쿠폰 모두 적용을 완료합니다
    b. 쿠폰 적용이 불가능한 상품(availableCoupon == false)을 쿠폰 할인에서 제외합니다

  E. 최종 결제 금액을 장바구니 페이지 하단에 보여줍니다

```

## 추가 구현 항목

```
1. 상품 목록 페이지
  A.보고 있는 상품 이름 헤더에 띄워주기 구현

  B.담기/빼기 모달창 구현

  C.클릭했을때 맨 위로 스크롤 구현

  D.주문 완료했을때 orderList 목록 토글 구현

2.장바구니 페이지
  A.수량 모달창 구현

  B.할인률 보여주기 구현

```

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
