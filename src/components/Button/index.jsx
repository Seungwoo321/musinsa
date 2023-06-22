import React from 'react'
import { StyledButton } from './style.js'
import { object, node, bool, func } from 'prop-types'

export default function Button ({ style, active, accent, round, small, children, onClick }) {
    const classNames = [
        active && 'active',
        accent && 'accent',
        round && 'round',
        small && 'small'
    ].filter(Boolean).join(' ')
    return (
        <StyledButton
            style={style}
            className={classNames}
            onClick={onClick}
        >
            {children}
        </StyledButton>
    )
}

Button.propTypes = {
    style: object,
    active: bool,
    accent: bool,
    round: bool,
    small: bool,
    children: node,
    onClick: func
}
