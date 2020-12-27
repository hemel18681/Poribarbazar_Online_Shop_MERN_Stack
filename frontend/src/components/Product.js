import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from '../Rating'
const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a herf={`/product/${product._id}`}>
                <Card.Img src = {product.image} variant='top'/>
            </a>
            <Card.Body>
                <a herf={`/product/${product._id}`}>
                    <Card.Title as = 'div'><strong>{product.name}</strong></Card.Title>
                </a>
                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numRevies} reviews`}/>
                </Card.Text>
              <Card.Text as='h3'>{product.price}tk</Card.Text>  
            </Card.Body>
        </Card>
    )
}

export default Product
