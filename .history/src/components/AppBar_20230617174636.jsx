import React from 'react'
import Logo from '../assets/logo_musinsa.svg'
import styled from '@emotion/styled'

const styledBar = styled.div`

`

export default function AppBar () {
    return (
        <header>
            <styledBar>
                <img src={Logo} />
            </styledBar>
        </header>
    )
}
