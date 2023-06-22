import React from 'react'
import Logo from '../../assets/logo_musinsa.svg'
import { StyledHeader, StyledLogoContainer } from './style'

export default function AppBar () {
    return (
        <StyledHeader>
            <StyledLogoContainer>
                <img src={Logo} className="logo" alt="MUSINAT" />
            </StyledLogoContainer>
        </StyledHeader>
    )
}
