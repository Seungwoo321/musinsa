import React from 'react'
import { string, number, object, func } from 'prop-types'
import * as icons from './icons.js'

export default function Icon ({ name, style, size = 16, onClick }) {
    if (!icons[name]) {
        return (
            <></>
        )
    }
    return (
        <img
            src={icons[name]}
            alt={name}
            style={style}
            width={size}
            height={size}
            onClick={onClick}
        />
    )
}

Icon.propTypes = {
    name: string,
    style: object,
    size: number,
    onClick: func
}
