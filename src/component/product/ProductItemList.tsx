import ProductItemContainer from "../../container/product/ProductItemContainer";
import { productItemType } from "../../type/productType";

interface IProps {
  productItemData: productItemType[];
}

const ProductItemList = ({ productItemData }: IProps) => {
  return (
    <ul>
      {productItemData.map((productItem: productItemType) => {
        return (
          <ProductItemContainer
            key={productItem.productId}
            productItem={productItem}
          />
        );
      })}
    </ul>
  );
};

export default ProductItemList;
