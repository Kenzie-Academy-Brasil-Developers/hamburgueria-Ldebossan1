import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";


export const Header = () => {
   const [value, setValue] = useState("");

   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div className="formDiv">
            <button className="cartButton">
                <MdShoppingCart size={25} />
                <span className="cartItems">0</span>
            </button>
            <form className="headerForm">
               <input
                  type="text"
                  className="headerInput"
                  value={value}
                  placeholder="Digitar pesquisa"
                  onChange={(e) => setValue(e.target.value)}
               />
               <button className="buttonGreen" type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
