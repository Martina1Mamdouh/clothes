import React from 'react'
import { Offcanvas, OffcanvasBody, OffcanvasTitle, Stack } from 'react-bootstrap'
import { useShoppingCart } from './Shoppingcartcontext'
import { CartItem } from './CartItem'
import FormatCurrency from './FormatCurrency'
import StoreItem from '../data/StoreItem.json' 
export const ShoppingCart = ({isOpen}) => {
    const{cartItems ,closeCart} = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement= "end">
        <Offcanvas.Header closeButton>
            <OffcanvasTitle>Cart</OffcanvasTitle>
        </Offcanvas.Header>
        <OffcanvasBody>
           <Stack gap={2}>
           {cartItems.map((item)=>(
            <CartItem key={item.id} {...item}/>
            ))}
           <div className='ms-auto fw-bold fs-5'>
            Total{""}
            {FormatCurrency(
                cartItems.reduce((total,CartItem)=>{
                    const item=StoreItem.find((i)=>i.id===CartItem.id);
                    return total + (item?.price ||0) * CartItem.quantity;
                },0)
            )}
           </div>
           </Stack>
        </OffcanvasBody>
    </Offcanvas>
  )
}
export default ShoppingCart