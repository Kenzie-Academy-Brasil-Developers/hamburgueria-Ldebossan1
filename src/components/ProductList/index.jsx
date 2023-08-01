import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList }) => {
   return (
      <ul className="productList">
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </ul>
   );
};
