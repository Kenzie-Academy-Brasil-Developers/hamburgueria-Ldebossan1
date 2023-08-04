import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ setCartList, product, removeProduct }) => {



  return (
    <li className="modalProduct">
      <div className="cardDetails">
        <img src={product.img} alt={product.name} className="imgModal" />
        <h3 className="title1 modalItemTitle">{product.name}</h3>
      </div>
      <button
        className="deleteButton"
        onClick={() => removeProduct(product)}
        aria-label="delete"
        title="Remover item"
      >
        <MdDelete size={21} />
      </button>
    </li>
  );
};
