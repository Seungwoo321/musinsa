import React from 'react'
import { css } from '@emotion/react'
import { string, object } from 'prop-types'

export default function AutoCompleteItem ({ name, regex }) {
    const highlightedName = name.replace(regex, (match) => `<span style="background-color: #ffff00;">${match}</span>`)
    return (
        <li
            css={css`
                padding: 10px;
                font-size: 14px;
            `}
        >
            <span dangerouslySetInnerHTML={{ __html: highlightedName }} />
        </li>
    )
}

AutoCompleteItem.propTypes = {
    name: string.isRequired,
    regex: object.isRequired
}
