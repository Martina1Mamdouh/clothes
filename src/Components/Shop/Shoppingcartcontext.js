import { createContext, useContext,useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import ShoppingCart from "./ShoppingCart";
 const Shoppingcartcontext = createContext ({});

  const ShoppingCartProvider = ({children }) =>{
   const [isOpen,setIsOpen] = useState(false);
    const [cartItems, setCartItems]= useState ([]);
    const openCart =()=>{
      setIsOpen(true);
    };
    const closeCart =()=>{
      setIsOpen(false);
    };
    const cartQuantity = cartItems.reduce((quantity,item)=>(
      item.quantity+quantity
    ),0)
   const getItemsQuatity =(id)=>{
    return cartItems.find((item)=>item.id===id)?.quantity || 0;
   };
   const increaseCartQuantity = (id) =>{
      setCartItems((currentItems)=>{
         if(currentItems.find((item) => item.id === id) == null){
            return[...currentItems, { id, quantity: 1 }];
         }else{
            return currentItems.map((item)=>{
               if(item.id===id){
                  return {...item,quantity:item.quantity+1}
               }else{
                  return item;
               }
            })
         }
         
      })
   }
   const DecreaseCartQuantity = (id) => {
      setCartItems((currentItems) => {
        if (currentItems.find((item) => item.id === id)?.quantity === 1) {
          return currentItems.filter((item) => item.id !== id);
        } else {
          return currentItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        }
      });
    };
    const RemoveFromCart = (id) => {
      setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
    };
    return (
       <Shoppingcartcontext.Provider 
       value={{cartItems,getItemsQuatity,
       increaseCartQuantity,
       DecreaseCartQuantity,
       RemoveFromCart,
       closeCart,
       openCart,
       cartQuantity}} >
        {children}
        <ShoppingCart isOpen={isOpen}/>
       </Shoppingcartcontext.Provider>
       );
  };
  export default ShoppingCartProvider;

  export const useShoppingCart = ()=>{
       return useContext(Shoppingcartcontext)
    }