import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  }

  const Cards = products.map(product => (
    <div key={product.id} className='col-lg-12 text-center' style={{marginBottom: '10px'}}>
      <Card>
          <div >
            <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px'}}/>
          </div>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                {product.title}
              </Card.Text>
              <Card.Text>
                {product.price}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove from cart</Button>
            </Card.Footer>
          </Card>
    </div>
  ))

  return (
    <>
    {
      products.length <= 0  ? <h1 className='text-center'>No items added</h1> : <><h1 className='text-center'>Cart</h1>
      {Cards} </>
    }
    
    </>
  )
}

export default Cart