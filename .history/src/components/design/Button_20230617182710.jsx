import styled from '@emotion/styled'
import React from 'react'
import { node } from 'prop-types'
const StyledButton = styled.button`

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
