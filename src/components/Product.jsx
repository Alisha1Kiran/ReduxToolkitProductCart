import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice'
import StatusCode from '../utils/StatusCode';

const Product = () => {
  const dispatch = useDispatch();
  const {data: products,status} = useSelector(state => state.products)

  // const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(getProducts());
    // fetch('https://fake-store-api.mock.beeceptor.com/api/products')
    // .then(response => response.json())
    // .then(data => setProducts(data))
    // .catch(error => console.error(error))
  }, [])

  if(status === StatusCode.LOADING){
    return <p>Loading ....</p>
  }

  if(status === StatusCode.ERROR){
    return <Alert key="danger" variant="danger">
      Something went wrong !.. Please try again
      </Alert>
  }

  const addToCart = (products) => {
    // call action using dispatch
    dispatch(add(products));
  }

  const Cards = products.map(product => (
    <div key={product.id} className='col-sm-2 col-md-3 text-center' style={{marginBottom: '10px'}}>
      <Card style={{ width: '18rem', height: '21rem' }}>
          <div >
            <Card.Img variant="top" src={product.image} style={{width: '90px', height: '100px'}}/>
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
            <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
            </Card.Footer>
          </Card>
    </div>
  ))

  return (
    <>
    <h1 className='text-center'>Product Dashboard</h1>
    <div className='row'>
      {Cards}
    </div>
    </>
  )
}

export default Product