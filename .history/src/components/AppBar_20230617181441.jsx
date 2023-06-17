import React from 'react'
import Logo from '../assets/logo_musinsa.svg'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const StyledBar = styled.div`
    width: 100%;
    height: 50px;
    position: relative;
    padding: 1rem;
`

export default function AppBar () {
    return (
        <header css={css`
                position: fixed;
                left: 0;
                top: 0;
                right: 0;
            `}
        >
            <StyledBar>
                <img src={Logo} className="logo" />
            </StyledBar>
        </header>
    )
}
