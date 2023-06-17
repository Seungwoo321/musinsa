import React from 'react'
import Logo from '../assets/logo_musinsa.svg'
import styled from '@emotion/styled'

const StyledHeader = styled.header`
    width: 375px;
    height: 50px;
    position: relative;
`

const StyledBar = styled.div`

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
        <StyledHeader>
            <StyledBar>
                <img src={Logo} className="logo" />
            </StyledBar>
        </StyledHeader>
    )
}
