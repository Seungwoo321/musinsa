import React from 'react'
import { css } from '@emotion/react'
import { node, bool, func } from 'prop-types'

const buttonStyle = css`
    padding: 7px 15px;
    font-size: 14px;
    line-height: 21px;
    height: 35px;
    color: #000;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #eee;
    cursor: pointer;
    margin-left: 5px;
`
const accentStyle = css`
    color: #fff;
    background: #0078ff;
`
const activeStyle = css`
    color: #0078ff
`
const roundStyle = css`
    border-radius: 18px;
`
const smallStyle = css`
    padding: 4px 10px;
    font-size: 12px;
    line-height: 18px;
    height: 26px;
`
export default function Button ({ active, accent, round, small, children, onClick }) {
    return (
        <button
            css={[
                buttonStyle,
                active && activeStyle,
                accent && accentStyle,
                round && roundStyle,
                small && smallStyle
            ]}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    active: bool,
    accent: bool,
    round: bool,
    small: bool,
    children: node,
    onClick: func
}
