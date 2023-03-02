import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import FormatCurrency from './FormatCurrency'
import { useShoppingCart } from './Shoppingcartcontext'
import StoreItem from '../data/StoreItem.json'
export const CartItem = ({id,quantity}) => {
    const {RemoveFromCart} =useShoppingCart();
    const item =StoreItem.find((i)=>i.id === id)
    if(item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
    <img
      src={item.imgUrl}
      alt="cart-img"
      style={{ width: "125px", height: "75px", objectFit: "cover" }}
    />
    <div className="me-auto">
      <div>
        {item.name}{" "}
        {quantity > 1 && (
          <span className="text-muted" style={{ fontSize: "0.65rem" }}>
            x{quantity}
          </span>
        )}
      </div>
      <div className="text-muted" style={{ fontSize: "0.75rem" }}>
        {FormatCurrency(item.price)}
      </div>
    </div>
    <div>{FormatCurrency(item.price * quantity)}</div>
    <Button
      variant="outline-danger"
      size="sm"
      onClick={() => RemoveFromCart(item.id)}
    >
      &times;
    </Button>
  </Stack>
  )
}
