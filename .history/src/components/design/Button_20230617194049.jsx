import React from 'react'
import { css } from '@emotion/react'
import { string, node, bool } from 'prop-types'
import Icon from '../design/Icon'

const defaultStyle = css`
    padding: 7px 15px;
    font-size: 14px;
    line-height: 21px;
    color: #000;
    border: 1px solid #eee;
    background: #fff;
    border-radius: 18px;
    margin: 5px 5px 5px 0;
    cursor: pointer;
`
const activeStyle = css`
    color: #fff;
    background: #0078ff;
`
export default function Button ({ icon, active, children }) {
    return (
        <button
            css={[
                defaultStyle,
                active ? activeStyle : null
            ]}
        >
            {children}
            {icon
                ? (<Icon name={icon} style={{ verticalAlign: 'middle', marginLeft: '6px' }} size={16} />)
                : null}
        </button>
    )
}

Button.proptype = {
    icon: string,
    active: bool,
    children: node
}
