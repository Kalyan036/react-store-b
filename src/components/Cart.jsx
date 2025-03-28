import React from 'react';
import { useContext } from 'react';
import { appContext } from '../App';
export default function Cart() {
  const { products1, cart,setCart } = useContext(appContext)
  return (
    <div>Cart</div>
  )
}
