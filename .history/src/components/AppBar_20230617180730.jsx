import React from 'react'
import Logo from '../assets/logo_musinsa.svg'
import styled from '@emotion/styled'

const StyledHeader = styled.header`
    ${'' /* width: 100%; */}
    height: 50px;
    position: relative;
    padding: 1rem;
`

export default function AppBar () {
    return (
        <StyledHeader>
            <div>
                <img src={Logo} className="logo" />
            </div>
        </StyledHeader>
    )
}
