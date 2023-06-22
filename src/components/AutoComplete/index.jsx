import React from 'react'
import { css } from '@emotion/react'
import { array, string, func } from 'prop-types'
import AutoCompleteItem from './AutoCompleteItem'
import { StyledAutoComplete } from './style'
export default function AutoComplete ({ completeNames, searchText, onAddSearchFilter, toggleSearchArea }) {
    const regex = new RegExp(searchText.toString().trim(), 'g')
    const filteredNames = completeNames.filter(
        (name) => searchText.toString().trim() !== '' && name.match(regex)
    )
    const shouldDisplay = filteredNames.length > 0
    return (
        <StyledAutoComplete
            css={css`
                display: ${shouldDisplay ? 'block' : 'none'};
            `}
        >
            {filteredNames.map((name, index) => (
                <AutoCompleteItem
                    key={index}
                    name={name}
                    regex={regex}
                    onAddSearchFilter={onAddSearchFilter}
                    toggleSearchArea={toggleSearchArea}
                />
            ))}
        </StyledAutoComplete>
    )
}

AutoComplete.propTypes = {
    completeNames: array,
    searchText: string,
    onAddSearchFilter: func,
    toggleSearchArea: func
}
