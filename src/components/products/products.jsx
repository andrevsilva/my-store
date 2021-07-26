import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import ApiProduct from '../../services/api'

import { CartProvider, useCart } from "../cart/CartContext"

const AllProducts = styled.div`
    width: 80%; 
    display: block;
    margin: 0 auto;
    margin-top: 80px;
    display: flex;
    flex-wrap: wrap;
`
const CardBody = styled.div`
    width: 250px;
    height: 300px;
    background-color: #FFFAFA;
    padding: 15px;
    margin: 10px;
    border: none;
    box-shadow: 0 15px 30px 0 rgb(0 0 0 / 5%), 0 5px 15px 0 rgb(0 0 0 / 5%);
    transition: ease box-shadow 0.3s;
    border-radius: 0.25rem;

`
const Img = styled.img`
    width: 100%
`
const Name = styled.h3`
    font-size: 18px;
    display: block;
    font-family: 'Roboto Mono', monospace;
`
const Price = styled.span`
    font-size: 28px;
    display: block;
    font-family: 'Roboto Mono', monospace;
`
const AddCart = styled.button`
    background-color: rgb(8, 1, 42);
    border: rgb(8, 1, 42);
    border-radius: 0.25rem;
    color: rgb(120, 217, 138);
    padding: 10px;
    display: block;
    float: right;
    cursor: pointer;
    font-family: 'Roboto Mono', monospace;
`


const Products = ({ product }) => {
    const [products , setProducts] = useState([])
    const cart = useCart()
    const add = product => () => {
        cart.addCart(product)
    }
    
    useEffect(() => {
        ApiProduct.get("").then((response) => {
            setProducts(response.data)
        })
    }, [])

    return(
        <CartProvider>
            <AllProducts>
                {products.map(product =>( 
                    <CardBody>
                        <Img src={product.image} />
                        <Name> {product.name} </Name>
                        <Price>$ {product.price} </Price>
                        <AddCart onClick={add(product)}>Add cart</AddCart>
                    </CardBody>
                ))}
            </AllProducts>
        </CartProvider>
    )
}

export default Products