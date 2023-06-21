import React from 'react'
import { css } from '@emotion/react'
import { object, array, func } from 'prop-types'
import Button from './design/Button'
import Icon from './design/Icon'

export default function MenuFilterArea ({ filterLabel, activeFilters, activeKeywords, onRemoveFilter, onRemoveSearchFilter }) {
    const handleRemoveFilter = (key) => {
        onRemoveFilter(key)
    }
    const handleRemoveSearchFilter = (key) => {
        onRemoveSearchFilter(key)
    }
    return (
        <div
            css={css`
                display: ${(activeFilters.length || activeKeywords.length) ? 'block' : 'none'};
                position: fixed;
                z-index: 3;
                top: 105px;
                left: 0;
                right: 0;
                height: 50px;
                background: #fff;
                padding: 12px 10px;
            `}
        >
            {activeKeywords.map(key => {
                return (
                    <Button
                        small
                        key={key}
                        icon="close"
                        iconSize={16}
                        accent
                    >
                        {key}
                        <Icon name="Close" size={10} style={{ marginLeft: '6px' }} onClick={() => handleRemoveSearchFilter(key)} />
                    </Button>
                )
            })}
            {activeFilters.map(key => {
                return (
                    <Button
                        small
                        key={key}
                        icon="close"
                        iconSize={16}
                        accent
                    >
                        {filterLabel[key]}
                        <Icon name="Close" size={10} style={{ marginLeft: '6px' }} onClick={() => handleRemoveFilter(key)} />
                    </Button>
                )
            })}
        </div>
    )
}

MenuFilterArea.propTypes = {
    filterLabel: object,
    activeFilters: array,
    activeKeywords: array,
    onRemoveFilter: func,
    onRemoveSearchFilter: func
}
