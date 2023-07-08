import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../context/CartContext'

const CartWidget = () => {
  const state = useContext(CartContext);
  return (
    <div>
        <FontAwesomeIcon icon={faCartShopping} />
        <span>{state}</span>
    </div>
  )
}

export default CartWidget