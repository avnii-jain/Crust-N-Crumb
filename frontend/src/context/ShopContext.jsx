import { createContext, useState, useEffect } from "react";
import  { products } from "../assets/assets";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = '₹';
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState({});
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate()

    const addToCart = async (itemId, weight) => {

        if(!weight){
            toast.error('Select product weight')
            return;
        }
        else{
            toast.success('Added to cart!')
        }
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][weight]){
                cartData[itemId][weight] += 1;
            }
            else{
                cartData[itemId][weight] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][weight] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = ()=> {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                }catch(error){

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, weight, quantity) =>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][weight] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product.id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error){

                }
            }
        }
        return totalAmount;
    }
    const delivery_fee = getCartAmount() > 0 ? 50 : 0;

    useEffect(() => {
     const data = localStorage.getItem("orders");
     if (data) {
    setOrders(JSON.parse(data));
    }
   }, []);

   useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);

    const placeOrder = () => {
    let orderItems = [];

    for (const itemId in cartItems) {
        for (const weight in cartItems[itemId]) {
            if (cartItems[itemId][weight] > 0) {
                orderItems.push({
                    productId: itemId,
                    quantity: cartItems[itemId][weight],
                    weight: weight
                });
            }
        }
    }

    if (orderItems.length === 0) return;

    const newOrder = {
        date: new Date().toLocaleDateString(),
        items: orderItems
    };

    setOrders(prev => [newOrder, ...prev]);
    setCartItems({});
};

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        orders,
        setOrders,
        placeOrder
    };

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
