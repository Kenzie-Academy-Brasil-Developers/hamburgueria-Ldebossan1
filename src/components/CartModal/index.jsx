import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";


export const CartModal = ({ cartList, setCartList, setVisible, removeAll, removeProduct }) => {
  const total =   cartList.reduce((prevValue, product) => {
    return prevValue + product.price;
 }, 0)
  
 

  // console.log(cartList) ;


  return (
    <div role="dialog" className="modal">
      <div className="modal-content">
        <div className="modalHeader">
          <h2 className="modalTitle">Carrinho de compras</h2>
          <button
            onClick={() => setVisible(false)}
            className="modalButton"
            aria-label="close"
            title="Fechar"
          >
            <MdClose size={21} />
          </button>
        </div>
        <div>
          <ul className="modalList">
            {cartList.map(product => 
              <CartItemCard cartList={cartList} setCartList={setCartList} removeProduct={removeProduct} key={product.id} product={product} />
            )}
          </ul>
        </div>
        <div>
          <div className="totalValue">
            <span>Total</span>
            <span>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button className="buttonGray buttonModal" onClick={removeAll}>Remover todos</button>
        </div>
      </div>
    </div>
  );
};
