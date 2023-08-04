export const ProductCard = ({ product, addProduct }) => {
  return (
    <li className="productCard">
      <img src={product.img} alt={product.name} />
      <div>
        <h3 className="title1">{product.name}</h3>
        <p className="paragraph">{product.category}</p>
        <p className="priceText">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button
          className="buttonGray"
          onClick={(e) => {
            e.preventDefault();
            addProduct(product);
          }}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};
