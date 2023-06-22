import React from 'react'
import { string, object, func } from 'prop-types'
import { StyledAutoCompleteItem } from './style'
export default function AutoCompleteItem ({ name, regex, onAddSearchFilter, toggleSearchArea }) {
    const highlightedName = name.replace(regex, (match) => `<span style="background-color: #ffff00;">${match}</span>`)
    const handleClick = () => {
        toggleSearchArea()
        onAddSearchFilter(name)
    }
    return (
        <StyledAutoCompleteItem
            onClick={handleClick}
            data-value={name}
        >
            <span dangerouslySetInnerHTML={{ __html: highlightedName }} />
        </StyledAutoCompleteItem>
    )
}

AutoCompleteItem.propTypes = {
    name: string.isRequired,
    regex: object.isRequired,
    onAddSearchFilter: func,
    toggleSearchArea: func
}
