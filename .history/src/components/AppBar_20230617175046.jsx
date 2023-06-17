import React from 'react'
import Logo from '../assets/logo_musinsa.svg'
import styled from '@emotion/styled'

const StyledBar = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
`

const StyledLogo = styled.img`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
`

export default function AppBar () {
    return (
        <header>
            <StyledBar>
                <StyledLogo src={Logo} />
            </StyledBar>
        </header>
    )
}
