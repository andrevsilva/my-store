import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCart } from '../cart/CartContext'


const BodyHeader = styled.nav`
    background: rgb(8, 1, 42);
    text-align: center;
    padding-top: 25px;
    padding-bottom: 25px;
    position: fixed;
    width: 100%;
    top: 0;
    margin-bottom: 50px;
    z-index: 10;
`
const LinkMenu = styled.span`
    color: rgb(120, 217, 138);
    border: none;
    font-family: Exo2Bold;
    font-size: 20px;
    position: relative;
    font-family: 'Roboto Mono', monospace;
`
const CartCount = styled.button`
    background-color: rgb(8, 1, 42);
    border: 1px solid #FFFAFA;
    border-radius: 0.25rem;
    color: rgb(120, 217, 138);
    padding: 10px;
    display: block;
    float: right;
    cursor: pointer;
    position: relative;
    right: 20px;
    font-family: 'Roboto Mono', monospace;
`

const Header = () => {
    const cart = useCart ()
    
    const itemsCount = Object.keys(cart.cart).reduce((prev, curr) => {
        return prev + cart.cart[curr].quantity
    }, 0)
    
    return (
        <>
            <BodyHeader>
                <Link style={{textDecoration: "none"}} to="/">
                    <LinkMenu>Home</LinkMenu>
                </Link>
                <Link style={{textDecoration: "none" , marginLeft: 20 , marginRight: 20}} to="/products">
                    <LinkMenu>Products</LinkMenu>
                </Link>
                <Link style={{textDecoration: "none"}} to="/aboult">
                    <LinkMenu>Aboult</LinkMenu>
                </Link>
                <Link to="/cart">
                    <CartCount>Cart{ itemsCount > 0 && <span>({itemsCount})</span> }</CartCount>
                </Link>
            </BodyHeader>
        </>
    )

}

export default Header