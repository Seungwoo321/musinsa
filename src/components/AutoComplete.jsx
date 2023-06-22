import React from 'react'
import { css } from '@emotion/react'
import { array, string, func } from 'prop-types'
import AutoCompleteItem from './AutoCompleteItem'

export default function AutoComplte ({ completeNames, searchText, onAddSearchFilter, toggleSearchArea }) {
    const regex = new RegExp(searchText.toString().trim(), 'g')
    const filteredNames = completeNames.filter(
        (name) => searchText.toString().trim() !== '' && name.match(regex)
    )
    const shouldDisplay = filteredNames.length > 0
    return (
        <ul
            css={css`
                    display: ${shouldDisplay ? 'block' : 'none'};
                    border: 1px solid #f1f1f1;
                    position: absolute;
                    top: 80px;
                    left: 0;
                    right: 0;
                    background: #fff;
                    min-height: 0px;
                    max-height: 300px;
                    margin: 0;
                    list-style: none;
                    padding: 10px;
                    overflow: scroll;
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
        </ul>
    )
}

AutoComplte.propTypes = {
    completeNames: array,
    searchText: string,
    onAddSearchFilter: func,
    toggleSearchArea: func
}
