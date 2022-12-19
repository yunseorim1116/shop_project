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
