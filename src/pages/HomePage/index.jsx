import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import axios from "axios";
import { api } from "../../api";

export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);

  // useEffect montagem - carrega os produtos da API e joga em productList
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  });

  // useEffect atualização - salva os produtos no localStorage (carregar no estado)
  // adição, exclusão, e exclusão geral do carrinho
  const addProduct = (product) => {
    const verifyProduct = cartList.find(element => element.id === product.id)
    if(verifyProduct) {
      alert('Item já adicionado')
    } else {
      setCartList((cartList) => [...cartList, product] )
    }
  };

  const removeProduct = (productToRemove) => {
    const newCartList = cartList.filter((product) => product !== productToRemove);
    setCartList(newCartList);
  };

  const removeAll = () => {
    setCartList([]);
  };
  // renderizações condições e o estado para exibir ou não o carrinho
  const [isVisible, setVisible] = useState(false);
  // filtro de busca
  const [query, setQuery] = useState("");

   const filterProductList = (productList) => {
     const filteredArray = productList.filter((product) =>
       product.name.toUpperCase().includes(query.toUpperCase())
     );
     setProductList(filteredArray);
   };

  // estilizar tudo com sass de forma responsiva

  return (
    <>
      <Header productList={productList} setProductList={setProductList} filterProductList={filterProductList} cartList={cartList} setVisible={setVisible} />
      <main>
        <ProductList addProduct={addProduct} productList={productList} />
        {isVisible ? (
          <CartModal
            removeProduct={removeProduct}
            removeAll={removeAll}
            setVisible={setVisible}
            cartList={cartList}
            setCartList={setCartList}
          />
        ) : null}
      </main>
    </>
  );
};
