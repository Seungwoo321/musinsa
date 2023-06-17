import styled from '@emotion/styled'
import React from 'react'
import { node } from 'prop-types'
const StyledButton = styled.button`
    padding: 7px 15px;
    font-size: 14px;
    line-height: 21px;
    color: #000;
    border: 1px solid #eee;
`

export default function Button ({ children }) {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

Button.proptype = {
    children: node
}
