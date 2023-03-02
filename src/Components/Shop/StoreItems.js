import React from 'react'
import { Card } from 'react-bootstrap'
import {Row ,Button} from 'react-bootstrap'
import { CardGroup } from 'react-bootstrap'
import FormatCurrency from './FormatCurrency'
import { useShoppingCart } from './Shoppingcartcontext'
const StoreItem = ({id,price,name,imgUrl}) => {
  const {getItemsQuatity,
    increaseCartQuantity,
    DecreaseCartQuantity,
    RemoveFromCart,
    } =useShoppingCart();
  const quantity =getItemsQuatity(id);
  return (
    <>
    <CardGroup>
            <Card className='h-100' >
              <Card.Img  variant="middle" src={imgUrl} style={{height:'200px'}} />
              <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-baseline'>
                <span className='fs-2'>{name}</span>
                <span className='text-muted me-2'>{FormatCurrency(price)}</span>
                 </Card.Title>
                <Card.Text>
                <div className="product-actions">
            {quantity ===0? (
            <Button variant="primary" onClick={()=> increaseCartQuantity(id)}>Add to cart</Button>
            ):(
             <div className='d-flex align-items-center flex-column'
             style={{gap:"0.5rem"}}>
              <div className='d-flex align-items-center justify-content-center'
              style={{gap:"2rem" }}>
              <Button onClick={()=> increaseCartQuantity(id)}>+</Button>
              <span className='fs-3'>{quantity}</span>
              <Button onClick={()=>DecreaseCartQuantity(id)}>-</Button>
              </div>
              <Button variant='danger' size='sm' onClick={()=>RemoveFromCart(id)}>remove</Button>
               </div>
            )}
          </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>   
          </>
  )
}
export default StoreItem