import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
padding-bottom: 10%;

h1 {
    color: yellow;
    font-size: 90px;
}

#two {
    color: lightgray;
    font-size: 20px;
}
`

export default class Header extends Component {
    render() {
        return (
            <StyledDiv>
                <h1>happyr</h1>
                <p id='one'>A uplifitng SMS Text Service Designed for SpartaHack 7</p>
                <p id='two'>Blake Potvin, Sampath Eaty, Prathik Murthy</p>
                <p id='two'>Powered by: Twillio, MongoDB, and Google Cloud.</p>
            </StyledDiv>
        )
    }
}