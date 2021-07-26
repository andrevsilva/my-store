import React from "react"
import styled from 'styled-components'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faLinkedin } from '@fortawesome/free-solid-svg-icons'

const Body = styled.div`
    background: rgb(8, 1, 42);
    width: 100%;
    height: 100%;
    position: absolute;
`
const AboutMe = styled.h1`
    margin-top: 100px;
    font-size: 44px;
    margin-left: 50px;
    font-family: 'Exo 2', sans-serif;
    color: rgb(120,217,138);
`
const About = styled.p`
    font-size: 18px;
    color: rgb(120,217,138);
    width: 35%;
    margin-left: 50px;
    margin-top: 30px;
    line-height: 26px;
    font-family: 'Roboto Mono',monospace;
`

export default class Aboult extends React.Component{
    render(){
        return(
            <Body>
                <AboutMe>About me.</AboutMe>
                <About>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros metus, cursus nec leo a, tincidunt ullamcorper lorem. Ut eget ex eget turpis tempor pulvinar et facilisis neque. Vestibulum facilisis nisi erat, et lobortis ex varius in. Etiam vel augue ac odio tempus tempus. Aenean id leo lacinia, condimentum mauris pulvinar, bibendum mi. Cras quis nisl in ex lacinia consectetur. Vestibulum maximus tortor a condimentum molestie. Suspendisse venenatis scelerisque purus quis pretium. Praesent ac urna justo. Fusce bibendum, mi quis porttitor imperdiet, lorem nibh ultricies felis, a tempus dui sem eu ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed lectus aliquet, bibendum libero nec, molestie est. Proin sapien sem, pretium sed turpis dapibus, vestibulum sagittis magna.
                    <br />
                    Vestibulum nec sollicitudin sem. Mauris quis eros auctor, tincidunt est sit amet, tempor elit. Pellentesque congue libero sit amet turpis accumsan pharetra ut sit amet massa. Ut vel sapien ligula. Aliquam interdum mauris vel quam consectetur volutpat. Praesent vel mi at magna vulputate lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    <br />
                    Etiam venenatis ex pellentesque ante rhoncus, ut luctus sapien ultrices. Quisque quis libero in erat venenatis sollicitudin non nec sem. Nullam feugiat nisi ac congue elementum. Ut luctus hendrerit velit. Fusce mollis enim justo, eget aliquam lacus mattis id. Mauris mattis libero volutpat sagittis euismod. Etiam consectetur turpis et magna elementum venenatis. Ut euismod ultricies massa, rutrum ultricies nisl suscipit a. Proin ac feugiat orci. Praesent pharetra condimentum odio, non lobortis orci porta id.
                </About>
                {/*<FontAwesomeIcon icon={faLinkedin} size="2x" />*/}
            </Body>
        )
    }
}