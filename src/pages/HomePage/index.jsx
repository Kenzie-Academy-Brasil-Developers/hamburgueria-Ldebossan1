import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import axios from "axios";
import { api } from "../../api";
import { toast } from "react-toastify";



export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([])
  const getCartLocalStorage = localStorage.getItem('@CARTLIST')
  const [cartList, setCartList] = useState(getCartLocalStorage ? JSON.parse(getCartLocalStorage) : []);

  // useEffect montagem - carrega os produtos da API e joga em productList
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get("/products");
        setProductList(data);
        setFilteredList(data)
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  // useEffect atualização - salva os produtos no localStorage (carregar no estado)
  useEffect(() => {
    localStorage.setItem('@CARTLIST', JSON.stringify(cartList))
  },[cartList])
  // adição, exclusão, e exclusão geral do carrinho
  const addProduct = (product) => {
    const verifyProduct = cartList.find(element => element.id === product.id)
    if(verifyProduct) {
      toast.warning('Produto já adicionado ao carrinho')
    } else {
      setCartList((cartList) => [...cartList, product] )
      toast.success('Produto adicionado ao carrinho')
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

   const filterProductList = (value) => {
     const filteredArray = productList.filter((product) =>
       product.name.toUpperCase().includes(value.toUpperCase())
     );
     setFilteredList(filteredArray);
   };
  // estilizar tudo com sass de forma responsiva
   console.log(filteredList)
  return (
    <>
      <Header productList={productList} setProductList={setProductList} filterProductList={filterProductList} cartList={cartList} setVisible={setVisible} />
      <main>
        <ProductList addProduct={addProduct} productList={filteredList} />
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
