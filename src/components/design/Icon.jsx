import React from 'react'
import { string, number, object } from 'prop-types'
import * as icons from './icons.js'

export default function Icon ({ name, style, size = 22 }) {
    if (!icons[name]) {
        return (
            <></>
        )
    }

    return (
        <img
            src={icons[name]}
            style={style}
            width={size}
            height={size}
        />
    )
}

Icon.proptype = {
    style: object,
    name: string,
    size: number
}
