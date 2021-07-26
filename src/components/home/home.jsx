import React from "react"
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Body = styled.div`
    background: rgb(8, 1, 42);
    width: 100%;
    height: 100%;
    position: absolute;
`
const Title = styled.h1`
    position: absolute;
    z-index: 9;
    color: rgb(120, 217, 138);
    font-size: 200px;
    display: block;
    margin: 0 auto;
    width: 100%;
    text-align: center;
    top: 150px;
    font-family: 'Exo 2', sans-serif;
`
const Button = styled.button`
    background-color: rgb(8,1,42);
    border: 1px solid #FFFAFA;
    border-radius: 0.25rem;
    color: rgb(120,217,138);
    padding: 10px;
    cursor: pointer;
    font-family: 'Roboto Mono',monospace;
    position: relative;
    top: 500px;
    display: block;
    margin: 0 auto;
    width: 200px;
`

export default class Home extends React.Component{
    render(){
        return(
            <Body>
                <Title>My Store.</Title>
                <Button><Link style={{textDecoration: "none" , color: "rgb(120,217,138)"}}to="/products">My Products</Link></Button>
            </Body>
        )
    }
}