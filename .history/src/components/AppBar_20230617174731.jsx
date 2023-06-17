import React from 'react'
import Logo from '../assets/logo_musinsa.svg'
import styled from '@emotion/styled'

const StyledBar = styled.div`
    position: relative;
    width: 100%;
    padding: 8px 0
`

export default function AppBar () {
    return (
        <header>
            <StyledBar>
                <img src={Logo} />
            </StyledBar>
        </header>
    )
}
