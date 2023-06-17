import React from 'react'
import Logo from '../assets/logo_musinsa.svg'
import styled from '@emotion/styled'

const StyledHeader = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
    padding: 1rem;
`

export default function AppBar () {
    return (
        <header>
            <StyledHeader>
                <img src={Logo} className="logo" width="95px" height="16px" />
            </StyledHeader>
        </header>
    )
}
