import React from 'react'
import Link from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartButtons from './CartButtons';

const ProductCard = ({productsData}) => {
  return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productsData.images} />
            <Card.Body>
              <Card.Title>{productsData.title}</Card.Title>
              <Card.Text>
                {productsData.description}
              </Card.Text>
              <Link to={`/item/${productsData.id}`}>Detalle...</Link>
              <CartButtons />
            </Card.Body>
          </Card>
        );
      }
  
    


export default ProductCard



