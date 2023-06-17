import styled from '@emotion/styled'
import React from 'react'
import { string, node } from 'prop-types'
import Icon from '../design/Icon'

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

export default function Button ({ icon, children }) {
    return (
        <StyledButton>
            {children}
            {icon
                ? (<Icon name={icon} style={{ verticalAlign: 'middle' }} size={16} />)
                : null}
        </StyledButton>
    )
}

Button.proptype = {
    icon: string,
    children: node
}
