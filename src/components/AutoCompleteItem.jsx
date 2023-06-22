import React from 'react'
import { css } from '@emotion/react'
import { string, object, func } from 'prop-types'

export default function AutoCompleteItem ({ name, regex, onAddSearchFilter, toggleSearchArea }) {
    const highlightedName = name.replace(regex, (match) => `<span style="background-color: #ffff00;">${match}</span>`)
    const handleClick = () => {
        toggleSearchArea()
        onAddSearchFilter(name)
    }
    return (
        <li
            css={css`
                padding: 10px;
                font-size: 14px;
            `}
            onClick={handleClick}
            data-value={name}
        >
            <span dangerouslySetInnerHTML={{ __html: highlightedName }} />
        </li>
    )
}

AutoCompleteItem.propTypes = {
    name: string.isRequired,
    regex: object.isRequired,
    onAddSearchFilter: func,
    toggleSearchArea: func
}
