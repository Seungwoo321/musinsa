import styled from '@emotion/styled'
import React from 'react'
import { node, string } from 'prop-types'
import SvgIcon from './Icon'
const StyledButton = styled.button`
    padding: 7px 15px;
    font-size: 14px;
    line-height: 21px;
    color: #000;
    border: 1px solid #eee;
    background: #fff;
    border-radius: 18px;
    margin-right: 5px;
    cursor: pointer;
`

export default function Button ({ iconName, children }) {
    return (
        <StyledButton>
            {children}
            <SvgIcon />
        </StyledButton>
    )
}

Button.proptype = {
    children: node,
    iconName: string
}
