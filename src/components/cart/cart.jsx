import React from "react"
import styled from 'styled-components'
import { useCart } from "./CartContext"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CartList = styled.div`
    width: 80%;
    transition: ease box-shadow 0.3s;
    padding: 15px;
    display: block;
    margin: 0 auto;
    position: relative;
    top: 150px;
`
const CartItem = styled.div`
    margin: 5px;
    background-color: #FFFAFA;
    box-shadow: 0 15px 30px 0 rgb(0 0 0 / 5%), 0 5px 15px 0 rgb(0 0 0 / 5%);
    border-radius: 0.25rem;
    display: flex;
    flex-wrap: wrap;
`
const CardImg = styled.div`
    width: 20%;
`
const ProductImg = styled.img`
    width: 150px;
`
const CartPrice = styled.div`
    display: block;
    width: 20%;
`
const CartName = styled.span`
    font-size: 18px;
    width: 20%;
    font-family: 'Roboto Mono', monospace;
`
const Price = styled.h1`
    display: block;
    font-size: 28px;
    font-family: 'Roboto Mono', monospace;
`
const CartContItem = styled.div`
    font-size: 28px;
    width: 20%;
`
const CartRemoveItem = styled.div`
    width: 20%;
`



const ProductCart = () => {
    const cart = useCart()
    const remove = id => () => {
        cart.removeCart(id)
    }
    const changeQuantity = id => event => {
        cart.changeQuantity(id, Number(event.target.value))
    }
    return(
        <>
            <CartList>
                {Object.keys(cart.cart).map((key) =>{
                    const product = cart.cart[key]
                    return(
                        <CartItem key={key}>

                            <CardImg>
                                <ProductImg src={product.product.image} />
                            </CardImg>
                            
                            <CartName>
                                <p style={{marginTop: 20}}>Product Name:</p>
                                {product.product.name}
                            </CartName>

                            <CartContItem>
                                <input style={{
                                        width: 50 , 
                                        margin: 0,
                                        display: "block" ,
                                        position: "relative" ,
                                        top: 40
                                    }}
                                    type="number" 
                                    defaultValue={product.quantity} onBlur={changeQuantity(key)} />
                            </CartContItem>

                            <CartPrice>
                                <p style={{marginTop: 20}}>Product Price:</p>
                                <Price>
                                    $ {product.product.price * product.quantity}
                                </Price>
                            </CartPrice>
                            <CartRemoveItem>
                                <button style={{marginTop: 40, backgroundColor: "transparante" , border: "none" , cursor: "pointer"}} onClick={remove(key)}>
                                    <FontAwesomeIcon icon={faTrash} size="2x" />
                                </button>
                            </CartRemoveItem>

                        </CartItem>
                    )
                })}
            </CartList>
        </>
    )
}

export default ProductCart