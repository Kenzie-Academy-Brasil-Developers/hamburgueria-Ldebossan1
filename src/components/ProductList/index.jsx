import { ProductCard } from "./ProductCard";

export const ProductList = ({ addingProduct, productList, addProduct }) => {
   return (
      <ul className="productList">
         {productList.map(product => 
            <ProductCard key={product.id} addingProduct={addingProduct} product={product} addProduct={addProduct} />
         )}
      </ul>
   );
};
