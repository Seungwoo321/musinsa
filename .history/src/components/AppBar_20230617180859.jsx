import React from 'react'
import Logo from '../assets/logo_musinsa.svg'
import styled from '@emotion/styled'

const StyledHeader = styled.div`
    max-width: 395px;
    width: 100%;
    height: 50px;
    position: relative;
    padding: 1rem;
`

export default function AppBar () {
    return (
        <header>
            <StyledHeader>
                {/* <img src={Logo} className="logo" /> */}
            </StyledHeader>
        </header>
    )
}
