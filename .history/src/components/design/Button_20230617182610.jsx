import styled from '@emotion/styled'
import React from 'react'

const StyledButton = styled.button`

`

export default function Button ({ name }) {
    return (
        <StyledButton>
            {name}
        </StyledButton>
    )
}
