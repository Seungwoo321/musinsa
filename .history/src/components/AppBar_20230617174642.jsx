import React from 'react'
import Logo from '../assets/logo_musinsa.svg'
import styled from '@emotion/styled'

const StyledBar = styled.div`

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
