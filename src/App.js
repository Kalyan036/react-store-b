import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register"
import Products from "./components/Products";
import {useState} from "react"
import {createContext} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from "./components/Orders";
export const appContext = createContext();
function App(props) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [cart,setCart] = useState({});
  const [orders,setOrders] = useState([]);
  const products = [
    { id: 1, name: "Product 1", price: 56,url:"https://picsum.photos/id/0/300/300" },
    { id: 2, name: "Product 2", price: 40,url:"https://picsum.photos/id/1/300/300" },
    { id: 3, name: "Product 3", price: 35,url:"https://picsum.photos/id/2/300/300" },
    { id: 4, name: "Product 4", price: 25,url:"https://picsum.photos/id/3/300/300" },
    { id: 5, name: "Product 5", price: 95,url:"https://picsum.photos/id/4/300/300" },
    { id: 6, name: "Product 6", price: 85,url:"https://picsum.photos/id/5/300/300" },
  ];
  const [placeOrders, setPlaceOrders] = useState([]);
  return (
    <BrowserRouter>
    <appContext.Provider 
    value={{users,setUsers,user,setUser,cart,setCart,products,placeOrders, setPlaceOrders, orders, setOrders}}>
      <Header />
      <Routes>
        <Route index element={<Products />} />
        <Route path="home" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
      </appContext.Provider>
    </BrowserRouter>
  );
}
export default App;
