import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";


export const Header = ({ productList, setProductList, cartList, setVisible, filterProductList }) => {
   const [value, setValue] = useState("");
  
   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" className="logoImg" />
         <div className="formDiv">
            <button onClick={() => setVisible(true)} className="cartButton" >
                <MdShoppingCart size={25} />
                <span className="cartItems">{cartList.length}</span>
            </button>
            <form className="headerForm">
               <input
                  type="text"
                  className="headerInput"
                  value={value}
                  placeholder="Digitar pesquisa"
                  onChange={(e) => setValue(e.target.value)}
               />
               <button onClick={(e) => {
                  e.preventDefault()
                  filterProductList(value)
               }} className="buttonGreen" type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
