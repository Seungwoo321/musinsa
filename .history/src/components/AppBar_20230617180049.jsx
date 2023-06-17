import React from 'react'
import Logo from '../assets/logo_musinsa.svg'
import styled from '@emotion/styled'

const StyledHeader = styled.header`
    width: 100%;
    height: 50px;
    position: relative;
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
